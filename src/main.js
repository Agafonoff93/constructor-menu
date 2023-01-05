import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI/';
// import VMyclickoutside from '@/directives/VMyclickoutside';
import clickOutSide from '@/directives/clickOutSide.js'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
	// console.log(components)
});

// directives.forEach(directive => {
// 	app.directive(directive.name, directive)
	
// });


app.use(store).mount('#app')


