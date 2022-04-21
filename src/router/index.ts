import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

export enum routeNames {
  home = '/',
  detail = '/detail/:id',
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const DetailPageView = () => import('@/views/DetailPageView.vue');
/* eslint-enable @typescript-eslint/explicit-function-return-type */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: routeNames.home,
    },
    {
      component: DetailPageView,
      name: 'detail',
      path: routeNames.detail,
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      redirect: routeNames.home,
    },
  ],
});

export default router;
