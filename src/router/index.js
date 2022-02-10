import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import SecondPage from "@/components/SecondPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/second",
    component: SecondPage
  }
];

export default new VueRouter({
  routes: routes
});
