import axios from 'axios'

export const templatesModule = {
	state:() => ({

		themes: [
				{
					value: 1,
					name: 'ThemeStockholm',
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
					name: 'ThemeHumburg',
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
					name: 'ThemeBologna',
					url: 'bologna',
					label: 'Болонья',
					text: 'Отличный лёгкий шаблон Болонья. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 4,
					name: 'ThemeIstanbul',
					url: 'istanbul',
					label: 'Станбул',
					text: 'Отличный лёгкий шаблон Станбул. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 5,
					name: 'ThemeCopenhagen',
					url: 'сopenhagen',
					label: 'Копенгаген',
					text: 'Отличный лёгкий шаблон Копенгаген. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 6,
					name: 'ThemeTallinn',
					url: 'tallinn',
					label: 'Таллин',
					text: 'Отличный лёгкий шаблон Таллин. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 7,
					name: 'ThemeLasVegas',
					url: 'lasvegas',
					label: 'Лас-Вегас',
					text: 'Отличный лёгкий шаблон Лас-Вегас. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 8,
					name: 'ThemeBeijing',
					url: 'Beijing',
					label: 'Пекин',
					text: 'Отличный лёгкий шаблон Пекин. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 9,
					name: 'ThemeTehran',
					url: 'tehran',
					label: 'Тегеран',
					text: 'Отличный лёгкий шаблон Тегеран. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 10,
					name: 'ThemeRome',
					url: 'rome',
					label: 'Рим',
					text: 'Отличный лёгкий шаблон Рим. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 11,
					name: 'ThemeBucharest',
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
				{
					value: 12,
					name: 'ThemeBahamas',
					url: 'bahamas',
					label: 'Багамы',
					text: 'Отличный лёгкий шаблон Багамы. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 13,
					name: 'ThemeDubai',
					url: 'dubai',
					label: 'Дубай',
					text: 'Отличный лёгкий шаблон Дубай. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 14,
					name: 'ThemeAthens',
					url: 'athens',
					label: 'Афины',
					text: 'Отличный лёгкий шаблон Афины. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 15,
					name: 'ThemeBoston',
					url: 'boston',
					label: 'Бостон',
					text: 'Отличный лёгкий шаблон Бостон. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 16,
					name: 'ThemeKioto',
					url: 'kioto',
					label: 'Киото',
					text: 'Отличный лёгкий шаблон Киото. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 17,
					name: 'ThemeOslo',
					url: 'oslo',
					label: 'Осло',
					text: 'Отличный лёгкий шаблон Осло. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 18,
					name: 'ThemeLapland',
					url: 'lapland',
					label: 'Лапландия',
					text: 'Отличный лёгкий шаблон Лапландия. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 19,
					name: 'ThemeCairo',
					url: 'сairo',
					label: 'Каир',
					text: 'Отличный лёгкий шаблон Каир. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
					value: 20,
					name: 'ThemeVenice',
					url: 'venice',
					label: 'Венеция',
					text: 'Отличный лёгкий шаблон Венеция. Используются разборчивые шрифты, столбчатая структура. Идеально подходит для стритфуда, лавки с мороженным или модного кафе.',
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
	
		// async fetchTemplates({state, commit}) {
		// 	try {
		// 		commit('SET_LOADING', true)
		// 		const response = await axios.get('http://localhost:3000/templates')
		// 		commit('SET_TEMPLATES', response.data.templates)		
				
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