import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    props: (route) => ({
      viewMode: route.query.view || 'card',
      category: route.query.category || 'all',
      searchQuery: route.query.search || ''
    })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;