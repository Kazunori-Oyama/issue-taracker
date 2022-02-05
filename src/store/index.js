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
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    fetchIssues({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/issues`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => commit("addIssue", doc.data()));
        });
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addIssue({ getters, commit }, issue) {
      if (getters.uid)
        firebase
          .firestore()
          .collection(`users/${getters.uid}/issues`)
          .add(issue);
      commit("addIssue", issue);
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
  },
  modules: {},
});
