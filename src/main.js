import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI/';

// import VMyclickoutside from '@/directives/VMyclickoutside';

import Vue3TouchEvents from "vue3-touch-events";
import router from '@/router/router'

const app = createApp(App).use(router)

components.forEach(component => {
	app.component(component.name, component)
	// console.log(components)
});

// directives.forEach(directive => {
// 	app.directive(directive.name, directive)

// });

app.use(store)
app.use(Vue3TouchEvents).mount('#app')

