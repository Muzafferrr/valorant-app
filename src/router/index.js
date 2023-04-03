import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SavedItemsView from '../views/SavedItemsView.vue'
import ErrorPageView from '../views/ErrorPageView.vue'
import AgentDetailView from '../views/AgentDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/saved-items',
      name: 'saved-items',
      component: SavedItemsView
    },
    {
      path: '/agent/:id',
      name: 'agent-detail',
      component: AgentDetailView
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPageView
    }
  ]
})

export default router
