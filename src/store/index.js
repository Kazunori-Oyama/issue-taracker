import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    issues: [],
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
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addIssue({ commit }, issue) {
      commit("addIssue", issue);
    },
  },
  modules: {},
});
