import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    issues: [],
    user: null,
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addIssue(state, issue) {
      state.issues.push(issue);
    },
  },
  actions: {
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
