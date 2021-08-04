import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/chartMap',
    name: 'chartMap',
    component: () =>  import(/* webpackChunkName: "chartMap" */ '../views/chartMap.vue'),
  },
  {
    path: '/canvasMap',
    name: 'canvasMap',
    component: () =>  import(/* webpackChunkName: "chartMap" */ '../views/canvasMap.vue'),
  },
  {
    path: '/svgMap',
    name: 'svgMap',
    component: () =>  import(/* webpackChunkName: "chartMap" */ '../views/svgMap/svgMap.vue'),
  },
  {
    path: '/svgTest',
    name: 'svgTest',
    component: () =>  import(/* webpackChunkName: "chartMap" */ '../views/svgTest.vue'),
  },
  {
    path: '/tableTest',
    name: 'tableTest',
    component: () =>  import(/* webpackChunkName: "chartMap" */ '../views/tableTest/index.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
