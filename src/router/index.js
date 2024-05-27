import { createRouter, createWebHistory } from 'vue-router';

import UserLayout from '@/layouts/user/UserLayout.vue';
import HomeView from '@/views/user/HomeView.vue';

import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue';
import DashboardView from '@/views/dashboard/DashboardView.vue'
import Main from '@/components/dashbord/main/Main.vue';

import attributeRoute from './attributeRoute';
import categoryRoute from './categoryRoute';
import cityRoute from './cityRoute';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UserLayout,
      children:[
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ]
    },


    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
          children:[
            {
              path: '',
              name: 'main',
              component: Main,
            },
           ...attributeRoute,
           ...categoryRoute,
           ...cityRoute,
          ]
        }
      ]
    }
    
    
   
   
  ]
})

export default router
