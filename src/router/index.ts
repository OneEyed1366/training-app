import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import StartView from "@/views/StartView/Core.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: StartView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
