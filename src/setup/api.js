import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://api.penna.com.br/v1";
const TOKEN = "_penna_apiToken";

if (process.env.NODE_ENV === "development") {
  const TOKEN = "_penna_apiToken_local";
}

if (document.location.href.indexOf("staging") > 0) {
  window.axios.defaults.baseURL = "https://api.staging.penna.com.br/v1";
}

window.axios.defaults.timeout = 1000 * 60 * 5;

const setAxiosHeader = token => {
  if (token) {
    window.axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    delete window.axios.defaults.headers.common.Authorization;
  }
};

const setToken = token => {
  localStorage.setItem(TOKEN, token);
  setAxiosHeader(token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN);
  setAxiosHeader(null);
};

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const init = () => {
  const token = getToken();
  if (token) {
    setAxiosHeader(token);

    window.axios.interceptors.request.use(
      request => {
        if (request.url.indexOf("type=excel") > 0 && request.method == "get") {
          request.responseType = "blob";
        }
        return request;
      },
      err => Promise.reject(err)
    );

    window.axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.data) {
          if (
            ["token_not_valid", "authentication_failed"].includes(
              error.response.data.code
            )
          ) {
            removeToken();
            window.location = `${window.location.origin}/login?path=${window.location.pathname}`;
          }
        }
        return Promise.reject(error);
      }
    );
  }
};

export { getToken, init, removeToken, setToken };
