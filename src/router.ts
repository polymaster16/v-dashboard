import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
import Classes from"./views/Classes.vue";
import NotFound from "./views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
 
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },

  {
    path: "/classes",
    name: "Classes",
    component: Classes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
