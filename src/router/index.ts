import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../components/dashboardCom.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
