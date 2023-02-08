import axios from 'axios'

export const userModule = {
	state:() => ({
			isUserLoading: false,
			templateUrl:'',
			about: {
				title: 'Леон',
				text: 'Самый лучший ресторан в мире',
				img: 'https://www.evgeniywebdev.com/template_for_menu/img/logo-example.png'
			 },
			// about: 
			// {
			// 	id:'',
			// 	title:'',
			// 	text:'',
			// 	img:'',
			// },
         // categories: [],
			categories: [
				{
				value: 1,
				label: 'Специальное предложение',
				text: 'Блюда недели, выгодные предложения и акции!',
				rubrics: [
					{
						value: 1,
						label: 'Салаты',
						text: 'Летние и горячие салаты из солнечной Италии.',
						img:'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg',
						dishs:[
							{
								value: 1,
								label: 'Цезарь',
								text: 'Зелёный салат, Помидоры, Куриное филе, Белый хлеб, Соус “Цезарь”, Сливочное масло, Чеснок, Сыр Пармезан',
								price:'359',
								weight: '350',
								img:'',
								sliderImage: [
									{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
									{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
									{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
									{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
									{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
								]
							},
						]
					},

					{
						value: 2,
						label: 'Закуски',
						text: 'Закуски вкусные и сытные разбавят ожидания блюда',
						img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg',
						dishs:[],
					},
					{
						value: 3,
						label: 'Коктели',
						text: 'Освежающий апепель shpritz и много всего',
						img: '',
						dishs:[],
					},
				]
				},
				{
				value:  2,
				label: 'Итальянская кухня',
				text: 'Вкусы италии вкусы италии вкусы италии',
				rubrics:[
					{
						value: 1,
						label: 'Пицца',
						text: 'Зелёный салат, Помидоры, Куриное филе, Белый хлеб, Соус “Цезарь”, Сливочное масло, Чеснок, Сыр Пармезан',
						img:'',
						dishs:[
							{
								value: 1,
								label: 'Пицца 4ре сыра',
								text: 'сыр, Помидоры, Куриное филе,4ре сыра',
								price:'549',
								weight: '300',
								img:'',
								sliderImage: [
									{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
									{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
									{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
									{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
									{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/cold.jpg'},
								]
							},
							{
								value: 2,
								label: 'Пицца Тайская',
								text: 'Салат, Ананасы, Куриное филе,нет 4ре сыра',
								price:'559',
								weight: '330',
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
								label: 'Пицца Капричеза',
								text: 'Грибы и сыр',
								price:'559',
								weight: '330',
								img:'',
								sliderImage: [
									{ id:1, name: 'img1', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
									{ id:2, name: 'img2', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-1.jpg'},
									{ id:3, name: 'img3', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-2.jpg'},
									{ id:4, name: 'img4', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-rup/hot.jpg'},
									{ id:5, name: 'img5', img: 'http://evgeniywebdev.com/template_for_menu/img/foto-items/item-4.jpg'},
								]
							},
						]
					},
						]
				},
				{
				value: 3,
				label: 'Русская кухня',
				text: 'Богатый вкус все блюда вкус все блюда',
				rubrics:[],
				},
			],
			
			langList: [
			{ id: 1, name: 'RU', img: require('@/assets/icons/lang/russia_1.png'), unavailable: true },
			{ id: 2, name: 'EN', img: require('@/assets/icons/lang/united-kingdom_1.png'), unavailable: false },
			{ id: 3, name: 'FR', img: require('@/assets/icons/lang/france_1.png'), unavailable: false },
			{ id: 4, name: 'GR', img: require('@/assets/icons/lang/germany_1.png'), unavailable: false },
			{ id: 5, name: 'IT', img: require('@/assets/icons/lang/italy_1.png'), unavailable: false },
			],

			langListReserve: [
			{ id: 6, name: 'SP', img: require('@/assets/icons/lang/spain_1.png'), unavailable: false },
			{ id: 7, name: 'CH', img: require('@/assets/icons/lang/china_1.png'), unavailable: false },
			{ id: 8, name: 'JP', img: require('@/assets/icons/lang/japan_1.png'), unavailable: false },
			{ id: 9, name: 'UA', img: require('@/assets/icons/lang/ukraine_1.png'), unavailable: true },
			{ id: 10, name: 'CZ', img: require('@/assets/icons/lang/czech-republic_1.png'), unavailable: false },
			{ id: 11, name: 'TR', img: require('@/assets/icons/lang/turkey_1.png'), unavailable: false },
			], 
	}),
	getters: {

	},
	mutations: {
		SET_ABOUT(state, about) {
			state.about = about;
		},
		SET_CATEGORIES(state, categories) {
			state.categories = categories
		},
		SET_LANGLIST(state, langList) {
			state.langList = langList
		},
		SET_LANGLIST_RESERVE(state, langListReserve) {
			state.langListReserve = langListReserve
		},
		SET_LOADING (state, bool) {
			state.isUserLoading = bool
		},
		ADD_CATEGORIES(state, category) {
			console.log('add category')
			state.categories.push(category);
		 },
		DELETE_CATEGORIES(state, category) {
			// this.categories = this.categories.filter(p => p.value !== category.value)
			console.log('del category')
			state.categories = state.categories.filter(p => p.value !== category.value)
		},
		ADD_URL(state, urlTheme ) {
         state.templateUrl = urlTheme 
		},
	},
	actions: {
		async addCategories({ commit, state }, category) {
			
			
			  const url = 'http://localhost:3000/user?project.categories=value';
			  const requestOptions = {
				 method: 'POST',
				 headers: { 'Content-Type': 'application/json' },
				 body: JSON.stringify(category)
			  };
			  
	
			  try {
				 const response = await fetch(url,requestOptions);
				
	
				 commit("ADD_CATEGORIES", category);
	
			
	
				 return response.data;
	
			  } catch (e) {
				 console.log('ERROR => ', 'Unable to create category!', e);
			  }
			
		 },

		// async addCategories({ commit, state }, category) {
			
	
		// 	//   const url = 'http://localhost:3000/user/project/categories';
			
		// 	   commit("ADD_CATEGORIES", category);
		// 	   const categories =  JSON.stringify(state.categories)
			   
		// 	  try {
		// 		// const response = await axios.post(url, data);
		// 		const response = await axios({
		// 			method: "post",
		// 			url: "http://localhost:3000/user.project_categories",
		// 			data:{
		// 				categories
		// 			}
					
		// 		});
				
		// 		return response.data
		// 		//  commit("ADD_CATEGORIES", category);
		// 		//  commit('SET_CATEGORIES', response.data.project.categories)
		// 	  } catch (e) {
		// 		 console.log('ERROR => ', 'Unable to create category!', e);
		// 	  }
			
		//  },
		async fetchUser({state, commit}) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.get('http://localhost:3000/user')
				commit('SET_ABOUT', response.data.project.about)		
				commit('SET_CATEGORIES', response.data.project.categories)		
			} catch (e) {
				console.log(e)
				alert('Ошибка')
			} finally {
				commit('SET_LOADING', false)
			}
		},
	   	
		async testUser({state, commit}, $event){
			console.log($event)
			try {
				
				const url = 'http://localhost:3000/user';
			   const data =  JSON.stringify($event)
				state.categories = $event
				const response = await axios.post(url, data);
				
				console.log(data);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		},

		async removeCategory({ commit }, category) {
			// const url = 'http://localhost:3000/user';
			// const requestOptions = {
			//   method: 'POST',
			//   headers: authHeader(),
			//   body: JSON.stringify({id: category.id})
			// };
			// requestOptions.headers['Content-Type'] = 'application/json';
	
			// try {
			//   const response = await fetch(url, requestOptions);
	
			  commit("DELETE_CATEGORIES", category);
	
			// } catch (e) {
			//   console.log('ERROR => ', 'Unable to delete work!', e);
			// }
		 },
		 addUrl({ commit }, urlTheme) {
			commit("ADD_URL", urlTheme);
		 }
	
	},
	namespaced:true 
}