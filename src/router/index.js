import Vue from "vue";
import VueRouter from "vue-router";
import ListaTarefas from "../views/ListaTarefas.vue";
import NovaTarefa from "../views/NovaTarefa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "lista",
    component: ListaTarefas,
  },
  {
    path: "/nova",
    name: "novaTarefa",
    component: NovaTarefa,
  },
  {
    path: "/editar",
    name: "editaTarefa",
    component: NovaTarefa,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
