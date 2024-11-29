import { createRouter, createWebHistory } from 'vue-router';
import VueComponentsView from '../views/VueComponentsViewExample.vue';
import WebComponentsView from '../views/WebComponentsViewExample.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vue-components',
      component: VueComponentsView
    },
    {
      path: '/web-components',
      name: 'web-components',
      component: WebComponentsView
    }
  ]
});

export default router;
