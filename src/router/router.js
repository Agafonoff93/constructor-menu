import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/pages/LayoutMain'
import PreviewTemplate from '@/pages/PreviewTemplate'
import templateTheme_1 from '@/templates/templateTheme_1'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutMain
  },
  {
    path: '/menu',
    name: 'previewTemplate',
    component: PreviewTemplate
  },
  {
    path: '/template-theme_1',
    name: 'templateTheme-1',
    component: templateTheme_1
  },
//   {
//     path: '/about',
//     name: 'about',
//     // Уровень маршрута распределение кода
//     // это генерирует отдельную кусок (примерно.
//     //, который лениво загружен при посещении маршрута.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
