import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AppPosts from "./components/AppPosts.vue";
import SinglePost from "./components/SinglePost.vue";
import AddPost from "./components/AddPost.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppPosts,
  },
  {
    path: "/posts",
    name: "posts",
    component: AppPosts,
  },
  {
    path: "/post/:id",
    component: SinglePost,
    props: true,
  },
  {
    path: "/add",
    component: AddPost,
    props: true,
  },
  { path: "/edit/:id", component: AddPost, props: true },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
