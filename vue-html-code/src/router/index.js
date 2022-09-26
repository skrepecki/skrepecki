import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView'
import ImageCustomPage from '../views/ImageCustomPage'

const routes = [
  {
    path: '/',
    component: IndexView
  },
  {
    path: '/:image_title/:image_id/:skrepeckiy',
    component: ImageCustomPage
  },
  {
    path: '/about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
