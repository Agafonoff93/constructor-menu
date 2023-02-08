import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/pages/LayoutMain.vue'
import LayoutChoose from '@/pages/LayoutChoose.vue'
import ResultPage from '@/pages/ResultPage.vue'
import PreviewTemplate from '@/pages/PreviewTemplate.vue'
import PageMenu from '@/pages/PageMenu.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutMain
  },
  {
    path: '/choose',
    name: 'LayoutChoose',
	 component:LayoutChoose, 
  },
  {
    path: '/choose/:name',
    name: 'PreviewTemplate',
    component: PreviewTemplate,
  },
  {
    path: '/menu/:name',
    name: 'PageMenu',
    component: PageMenu,
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage,
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
  history: createWebHistory(),
  routes
})

export default router
