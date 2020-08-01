import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

// TODO: Refactor routes into ./routes.ts

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
