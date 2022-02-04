import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAhDXYIkCIvfMjl_glvQyRKwuCPusKhwYE",
  authDomain: "issue-tracking-app.firebaseapp.com",
  projectId: "issue-tracking-app",
  storageBucket: "issue-tracking-app.appspot.com",
  messagingSenderId: "893829998256",
  appId: "1:893829998256:web:6f569b9280b9bc4033fd75",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
