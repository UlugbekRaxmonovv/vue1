import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Attractions from '@/components/Attractions.vue';
import Login from '@/components/Login.vue';
import Admin from '@/components/Admin.vue';
import Users from '@/components/Users.vue';
import Dashboard from '@/components/Dashboard.vue';
import Single from '@/components/Single.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/card',
    name: 'card',
    component: Attractions
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'users',
        name: 'admin-users',
        component: Users
      },
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: Dashboard
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
