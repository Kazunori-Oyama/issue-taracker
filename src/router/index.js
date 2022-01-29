import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Issues from "../views/Issues.vue";
import IssueForm from "../views/IssueForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/issues",
    name: "Issues",
    component: Issues,
  },
  {
    path: "/issues/:issue_id?/edit",
    name: "issue_edit",
    component: IssueForm,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
