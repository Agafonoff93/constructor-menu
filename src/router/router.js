import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/pages/LayoutMain'
import PreviewTemplate from '@/pages/PreviewTemplate'
import StockholmTheme from '@/templates/StockholmTheme'
import HumburgTheme from '@/templates/HumburgTheme'
import BucharestTheme from '@/templates/BucharestTheme'

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
    path: '/stockholm',
    name: 'Stockholm',
    component: StockholmTheme
  },
  {
    path: '/humburg',
    name: 'Humburg',
    component: HumburgTheme
  },
  {
    path: '/bucharest',
    name: 'Bucharest',
    component: BucharestTheme
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
