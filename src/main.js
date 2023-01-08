import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI/';
// import VMyclickoutside from '@/directives/VMyclickoutside';
import clickOutSide from '@/directives/clickOutSide.js'
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
	// console.log(components)
});

// directives.forEach(directive => {
// 	app.directive(directive.name, directive)
	
// });


app.use(Vue3TouchEvents).mount('#app')


