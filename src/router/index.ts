import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:year(\\d+)',
      name: 'loty-year',
      component: () => import('../views/LotyYearView.vue'),
      props: true,
    },
  ],
})

export default router
