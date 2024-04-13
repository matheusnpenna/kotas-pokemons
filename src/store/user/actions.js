import { setToken, removeToken } from "../../setup/api";

// 🎉

export default {
  login(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .post("/accounts/signin", data)
        .then(function(response) {
          setToken(response.data.token);
          context.commit("setUser", response.data);
          context.commit("setLogged", true);
          resolve();
        })
        .catch(reject);
    });
  },

  register(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .post("/accounts/signup", data)
        .then(function(response) {
          setToken(response.data.token);
          context.commit("setLogged", true);
          context.dispatch("postLogin", null, { root: true });
          resolve();
        })
        .catch(reject);
    });
  },

  forgot(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .post("/accounts/forgot-password", data)
        .then(resolve)
        .catch(reject);
    });
  },

  resetPassword(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .post("/accounts/reset-password", data)
        .then(resolve)
        .catch(reject);
    });
  },

  get(context) {
    return new Promise((resolve, reject) => {
      window.axios
        .get("/accounts/")
        .then(function(response) {
          context.commit("setUser", response.data);
          if (window.FS) {
            window.FS.identify(response.data.id, {
              displayName: response.data.name,
              email: response.data.email
            });
          }
          resolve();
        })
        .catch(function(error) {
          if (
            error.response.status === 401 ||
            error.response.data.code === "token_not_valid"
          ) {
            removeToken();
          }
          reject(error);
        });
    });
  },
  getInfo(context) {
    return new Promise((resolve, reject) => {
      window.axios
        .get("/accounts/info")
        .then(function(response) {
          context.commit("setAccountInfo", response.data);
          context.commit("setUser", response.data);
          resolve(response.data);
        })
        .catch(reject);
    });
  },
  update(context, data) {
    return new Promise((resolve, reject) => {
      window.axios
        .put("/accounts/info", data)
        .then(function() {
          context.commit("updateUser", data);
          resolve();
        })
        .catch(reject);
    });
  },
  getPreferences(context) {
    return new Promise((resolve, reject) => {
      return window.axios
        .get(`/accounts/preferences`)
        .then(({ data }) => {
          context.commit("setPreferences", data.preferences);
          resolve(data);
        })
        .catch(reject);
    });
  },
  setPreferences(context, data) {
    return new Promise((resolve, reject) => {
      return window.axios
        .put(`/accounts/preferences`, data)
        .then(resolve)
        .catch(reject);
    });
  },

  updatePassword(context, { newPassword, oldPassword }) {
    return new Promise((resolve, reject) => {
      window.axios
        .put("/accounts/change-password", {
          password: newPassword,
          password_old: oldPassword
        })
        .then(resolve)
        .catch(reject);
    });
  }
};
