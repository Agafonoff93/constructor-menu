import axios from 'axios'

export const templatesModule = {
	state:() => ({

		themes: [
				{
					value: 1,
					name: 'StockholmTheme',
					url: 'stockholm',	
					label: 'Стокгольм',
					text: 'Отличный лёгкий шаблон. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
					img:'',
					sliderImage: [
						{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
						{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
						{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
						{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
						{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
					]
				},
				{
					value: 2,
					name: 'HumburgTheme',
					url: 'humburg',
					label: 'Гамбург',
					text: 'Отличный лёгкий шаблон Гамбург. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
					img:'',
					sliderImage: [
						{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
						{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
						{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
						{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
						{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
					]
				},
				{
					value: 3,
					name: 'BucharestTheme',
					url: 'bucharest',
					label: 'Бухарест',
					text: 'Отличный лёгкий шаблон Бухарест. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
					img:'',
					sliderImage: [
						{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
						{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
						{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
						{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
						{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
					]
				},
			],
			
	}),
	getters: {

	},
	mutations: {
		SET_TEMPLATES(state, themes) {
			state.themes = themes;
		}
	},
	actions: {
	
		// async fetchUser({state, commit}) {
		// 	try {
		// 		commit('SET_LOADING', true)
		// 		const response = await axios.get('http://localhost:3000/user')
		// 		commit('SET_ABOUT', response.data.project.about)		
		// 		commit('SET_CATEGORIES', response.data.project.categories)		
		// 	} catch (e) {
		// 		console.log(e)
		// 		alert('Ошибка')
		// 	} finally {
		// 		commit('SET_LOADING', false)
		// 	}
		//   },
	  
	},
	namespaced:true 
}