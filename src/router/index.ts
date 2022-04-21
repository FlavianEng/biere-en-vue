import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

type lazyComponent = Promise<typeof import('*.vue')>;

export enum routeNames {
  home = '/',
  page1 = '/page1',
}

const Page1View = (): lazyComponent => import('../views/Page1View.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: routeNames.home,
    },
    {
      component: Page1View,
      name: 'page1',
      path: routeNames.page1,
    },
  ],
});

export default router;
