import Vue from "vue";
import Router from "vue-router";

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

const requireComponent = require.context("../views/layout/", true, /\.vue$/);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: 'home' */ "@/views/Home"),
    redirect: "MedalList",
    children: [],
  },
];
requireComponent.keys().forEach((key) => {
  const value = requireComponent(key);
  let path = value.default.__file.replace("src/views", "views");

  routes[0].children.push({
    name: value.default.name,
    path: "/" + value.default.name,
    meta: {
      title:
        "2024年重庆市第七届运动会" +
        "|" +
        (value.default.title ? value.default.title : ""),
    },
    component: () => import(`@/${path}`),
  });
});
console.log(111, routes);
const router = new Router({
  mode: "history", // 去掉#，需要路由模式改为history
  routes: routes,
});
router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next(); //执行进入路由，如果不写就不会进入目标页
});
export default router;
