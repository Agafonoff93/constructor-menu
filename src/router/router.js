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
		component: LayoutChoose,
		props: true,
	},
	{
		path: '/choose/:name',
		name: 'PreviewTemplate',
		component: PreviewTemplate,
		props: true,
	},
	// {
	// 	path: '/menu/:name',
	// 	name: 'PageMenu',
	// 	component: PageMenu,
	// 	props: true,
	// },
	{
		// path: '/Stockholm',
		path: '/1',
		name: 'PageMenuStockholmTheme',
		component: () => import( /* webpackChunkName: "PageMenuStockholmTheme" */'@/pages/templates/PageMenuStockholmTheme.vue'),
		props: true,
	},
	{
		// path: '/Humburg',
		path: '/2',
		name: 'PageMenuHumburgTheme',
		component: () => import( /* webpackChunkName: "PageMenuHumburgTheme" */'@/pages/templates/PageMenuHumburgTheme.vue'),
		props: true,
	},

	{
		path: '/3',
		name: 'PageMenuBolognaTheme',
		component: () => import( /* webpackChunkName: "PageMenuBolognaTheme" */ '@/pages/templates/PageMenuBolognaTheme.vue'),
		props: true,
	},
	{
		path: '/4',
		name: 'PageMenuIstanbulTheme',
		component: () => import( /* webpackChunkName: "PageMenuIstanbulTheme" */ '@/pages/templates/PageMenuIstanbulTheme.vue'),
		props: true,
	},
	{
		path: '/5',
		name: 'PageMenuCopenhagenTheme',
		component: () => import( /* webpackChunkName: "PageMenuCopenhagenTheme" */ '@/pages/templates/PageMenuCopenhagenTheme.vue'),
		props: true,
	},
	{
		path: '/6',
		name: 'PageMenuTallinnTheme',
		component: () => import( /* webpackChunkName: "PageMenuTallinnTheme" */ '@/pages/templates/PageMenuTallinnTheme.vue'),
		props: true,
	},
	{
		path: '/7',
		name: 'PageMenuLasVegasTheme',
		component: () => import( /* webpackChunkName: "PageMenuLasVegasTheme" */ '@/pages/templates/PageMenuLasVegasTheme.vue'),
		props: true,
	},
	{
		path: '/8',
		name: 'PageMenuBeijingTheme',
		component: () => import( /* webpackChunkName: "PageMenuBeijingTheme" */ '@/pages/templates/PageMenuBeijingTheme.vue'),
		props: true,
	},
	{
		path: '/9',
		name: 'PageMenuTehranTheme',
		component: () => import( /* webpackChunkName: "PageMenuTehranTheme" */ '@/pages/templates/PageMenuTehranTheme.vue'),
		props: true,
	},
	{
		path: '/10',
		name: 'PageMenuRomeTheme',
		component: () => import( /* webpackChunkName: "PageMenuRomeTheme" */ '@/pages/templates/PageMenuRomeTheme.vue'),
		props: true,
	},
	{
		path: '/11',
		name: 'PageMenuBahamasTheme',
		component: () => import( /* webpackChunkName: "PageMenuBahamasTheme" */ '@/pages/templates/PageMenuBahamasTheme.vue'),
		props: true,
	},
	{
		// path: '/Bucharest',
		path: '/12',
		name: 'PageMenuBucharestTheme',
		component: () => import( /* webpackChunkName: "PageMenuBucharestTheme" */ '@/pages/templates/PageMenuBucharestTheme.vue'),
		props: true,
	},
	{
		path: '/13',
		name: 'PageMenuDubaiTheme',
		component: () => import( /* webpackChunkName: "PageMenuDubaiTheme" */ '@/pages/templates/PageMenuDubaiTheme.vue'),
		props: true,
	},
	{
		path: '/14',
		name: 'PageMenuAthensTheme',
		component: () => import( /* webpackChunkName: "PageMenuAthensTheme" */ '@/pages/templates/PageMenuAthensTheme.vue'),
		props: true,
	},
	{
		path: '/15',
		name: 'PageMenuBostonTheme',
		component: () => import( /* webpackChunkName: "PageMenuBostonTheme" */ '@/pages/templates/PageMenuBostonTheme.vue'),
		props: true,
	},
	{
		path: '/16',
		name: 'PageMenuKiotoTheme',
		component: () => import( /* webpackChunkName: "PageMenuKiotoTheme" */ '@/pages/templates/PageMenuKiotoTheme.vue'),
		props: true,
	},
	{
		path: '/17',
		name: 'PageMenuOsloTheme',
		component: () => import( /* webpackChunkName: "PageMenuOsloTheme" */ '@/pages/templates/PageMenuOsloTheme.vue'),
		props: true,
	},
	{
		path: '/18',
		name: 'PageMenuLaplandTheme',
		component: () => import( /* webpackChunkName: "PageMenuLaplandTheme" */ '@/pages/templates/PageMenuLaplandTheme.vue'),
		props: true,
	},
	{
		path: '/19',
		name: 'PageMenuCairoTheme',
		component: () => import( /* webpackChunkName: "PageMenuCairoTheme" */ '@/pages/templates/PageMenuCairoTheme.vue'),
		props: true,
	},
	{
		path: '/20',
		name: 'PageMenuVeniceTheme',
		component: () => import( /* webpackChunkName: "PageMenuVeniceTheme" */ '@/pages/templates/PageMenuVeniceTheme.vue'),
		props: true,
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

// Fetch dynamic routes from the server
// fetch('/api/routes')
//   .then(response => response.json())
//   .then(routes => {
//     router.addRoutes(routes)
//   })

export default router
