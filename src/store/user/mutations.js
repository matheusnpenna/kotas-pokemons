export default {
  setFullScreenLoading(state, fullScreenLoading) {
    state.fullScreenLoading = fullScreenLoading;
  },
  setUser(state, user) {
    state.user = {
      ...state.user,
      ...user
    };
  },
  updateUser(state, data) {
    for (const i in data) {
      state.user[i] = data[i];
    }
  },
  setLogged(state, logged) {
    state.logged = logged;
  },
  reset(state) {
    state.user = null;
    state.logged = false;
  },
};