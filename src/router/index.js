import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
import UserLayout from '@/layouts/user/UserLayout.vue';
import HomeView from '@/views/user/HomeView.vue';

// auth

import AuthView from '@/views/dashboard/auth/AuthView.vue';
import Login from '@/components/dashbord/auth/Login.vue';


import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue';
import DashboardView from '@/views/dashboard/DashboardView.vue'
import Main from '@/components/dashbord/main/Main.vue';



import attributeRoute from './attributeRoute';
import categoryRoute from './categoryRoute';
import cityRoute from './cityRoute';
import neighborhoodRoute from './neighborhoodRoute';
import propertyRoute from './propertyRoute';
import productRoute from './productRoute';
import shopRoute from './shopRoute';
import userRoute from './userRoute';

// const store = useStore();
const router = createRouter({
  history: createWebHistory('/admin/'),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },

    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
          children: [
            {
              path: '',
              name: 'main',
              component: Main,
            },
            ...attributeRoute,
            ...categoryRoute,
            ...cityRoute,
            ...neighborhoodRoute,
            ...propertyRoute,
            ...productRoute,
            ...shopRoute,
            ...userRoute,
          ]
        }
      ],

    },


    {
      path: '/auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },

      ]
    },


  ]
});


router.beforeEach(async (to, from, next) => {
  try {
    await store.dispatch('auth/fetchUser');
  } catch (error) {
    console.error('Failed to fetch user', error);
  }

  const isAuthenticated = store.getters['auth/isAuthenticated'];
  const user = store.getters['auth/user'];

  if (to.path.startsWith('/dashboard')) {
    if (!isAuthenticated || (user && user.role !== 'admin')) {
      next('/auth/login'); // ou rediriger vers une page d'erreur/403
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
