import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    issues: [],
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },

    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addIssue(state, issue) {
      state.issues.push(issue);
    },
  },
  actions: {
    deleteLoginUer({ commit }) {
      commit("deleteLoginUser");
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    logout() {
      firebase.auth().signOut();
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addIssue({ commit }, issue) {
      commit("addIssue", issue);
    },
  },
  modules: {},
});
