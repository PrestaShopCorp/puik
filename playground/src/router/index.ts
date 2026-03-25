import { createRouter, createWebHistory } from 'vue-router';
import VueComponentsView from '../views/VueComponentsView.vue';
import WebComponentsView from '../views/WebComponentsView.vue';
import TestTabNavigation from '../views/vuecomponents/testTabNavigation.vue';
import DashboardView from '../views/vuecomponents/tabNav/DashboardView.vue';
import ToolsView from '../views/vuecomponents/tabNav/ToolsView.vue';
import ToolsListView from '../views/vuecomponents/tabNav/ToolsListView.vue';
import ToolsConfigView from '../views/vuecomponents/tabNav/ToolsConfigView.vue';

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
    },
    {
      path: '/tab-nav',
      name: 'tab-nav',
      component: TestTabNavigation,
      redirect: '/tab-nav/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'tab-nav-dashboard',
          component: DashboardView
        },
        {
          path: 'tools',
          name: 'tab-nav-tools',
          component: ToolsView,
          redirect: '/tab-nav/tools/list',
          children: [
            {
              path: 'list',
              name: 'tab-nav-tools-list',
              component: ToolsListView
            },
            {
              path: 'config',
              name: 'tab-nav-tools-config',
              component: ToolsConfigView
            }
          ]
        }
      ]
    }
  ]
});

export default router;
