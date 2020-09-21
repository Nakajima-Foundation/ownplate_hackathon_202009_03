import Vue from "vue";
import Router from "vue-router";
import routes from "./router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes,
});

export default router;
