import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Gayhub from "../views/Gayhub/Gayhub.vue";
import Pullrequests from "../views/Pullrequests/Pullrequests.vue";
import Issues from "../views/Issues/Issues.vue";
import Marcketplace from "../views/Marcketplace/Marcketplace.vue";
import Explore from "../views/Explore/Explore.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Gayhub",
    component: Gayhub
  },
  {
    path: "/Pullrequests",
    name: "Pullrequests",
    component: Pullrequests
  },
  {
    path: "/Issues",
    name: "Issues",
    component: Issues
  },
  {
    path: "/Marcketplace",
    name: "Marcketplace",
    component: Marcketplace
  },
  {
    path: "/Explore",
    name: "Explore",
    component: Explore
  },

];

const router = new VueRouter({
  routes
});

export default router;
