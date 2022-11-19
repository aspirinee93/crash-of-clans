import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import HomePage from "./pages/theHome";
import AboutPage from "./pages/theAbout";
import NotFoundPage from "./pages/theNotFound";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      // path: "/:PathMatch(.*)*",
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routers;
