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
	
});

// directives.forEach(directive => {
// 	app.directive(directive.name, directive)

// });

app.use(store)
app.use(Vue3TouchEvents).mount('#app')




//Menu

// let unlock = true;
// let iconMenu = document.querySelector(".icon-menu");
// if (iconMenu != null) {
// 	let delay = 500;
// 	let menuBody = document.querySelector(".menu__body");
// 	iconMenu.addEventListener("click", function (e) {
// 		if (unlock) {
// 			body_lock(delay);
// 			iconMenu.classList.toggle("_active");
// 			menuBody.classList.toggle("_active");
// 		}
// 	});
// };
// function menu_close() {
// 	let iconMenu = document.querySelector(".icon-menu");
// 	let menuBody = document.querySelector(".menu__body");
// 	iconMenu.classList.remove("_active");
// 	menuBody.classList.remove("_active");
// }
// //=================
// //BodyLock
// function body_lock(delay) {
// 	let body = document.querySelector("body");
// 	if (body.classList.contains('_lock')) {
// 		body_lock_remove(delay);
// 	} else {
// 		body_lock_add(delay);
// 	}
// }
// function body_lock_remove(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		setTimeout(() => {
// 			for (let index = 0; index < lock_padding.length; index++) {
// 				const el = lock_padding[index];
// 				el.style.paddingRight = '0px';
// 			}
// 			body.style.paddingRight = '0px';
// 			body.classList.remove("_lock");
// 		}, delay);

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }
// function body_lock_add(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		for (let index = 0; index < lock_padding.length; index++) {
// 			const el = lock_padding[index];
// 			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		}
// 		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		body.classList.add("_lock");

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }
// //=================