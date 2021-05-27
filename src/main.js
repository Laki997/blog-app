import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AppPosts from "./components/AppPosts.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppPosts,
  },
  {
    path: "/posts",
    component: AppPosts,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
