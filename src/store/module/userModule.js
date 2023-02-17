import axios from 'axios'

export const userModule = {
	state:() => ({
			isUserLoading: false,
			templateUrl:'',
			
			about: 
			{
				id:'',
				title:'',
				text:'',
				img:'',
			},
         categories: [],
			
			
			langList: [],

			langListReserve: [], 
	}),
	getters: {

	},
	mutations: {

		// createcategory(category){
		// 	if(this.categories.find(p => p.value == category.value)){
		// 		console.log('вносим изменения')
		// 	}else{
		// 		console.log('добавление категории')
		// 		this.addCategories(category)
		// 		// this.categories.push(category);
		// 	}
		// 	// this.testUser()
		// },
		// createrubric(rubric, category_id){
		// 	console.log(rubric)
		// 	console.log(rubric.value)
		// 	let categoryFind = this.categories.find(p => p.value == category_id)
		// 	if(categoryFind.rubrics.find(p => p.value == rubric.value)) {
		// 		console.log('вносим изменения')
		// 	}else{
		// 	this.categories.find(p => p.value == category_id).rubrics.push(rubric)
		// 	}
		// },
		// createdish(dish,  formlabel_id, formlabel_rubric_id ){
		// 	let categoryFindForDish = this.categories.find(p => p.value == formlabel_id)
		// 	let rubricFindForDish = categoryFindForDish.rubrics.find(p => p.value == formlabel_rubric_id)
		// 	// console.log( categoryFindForDish)
		// 	// console.log( rubricFindForDish)
			
	
		// 	if(rubricFindForDish.dishs.find(p => p.value == dish.value)){
		// 		console.log('вносим изменения')
			
				
		// 	}else{
		// 		if (Array.isArray(rubricFindForDish.dishs) != true){
		// 		rubricFindForDish.dishs = [] }
		// 		rubricFindForDish.dishs.push(dish) 
		// 		console.log('добавляем в массив')
		// 		}
			
			
		// 	// console.log(Array.isArray(rubricFindForDish.dishs))
		// },
		// removecategory(category){
		// 	console.log(category)
		// 	console.log('удаление категории')
		// 	// this.categories = this.categories.filter(p => p.value !== category.value)
		// 	this.removeCategory(category)
		// 	this.popupVisible = false;
		// },
		// removemyrubric(rubric , category){
		// 	console.log('удаление рубрики')
		// 	let categoryFind = this.categories.find(p => p.value == category.value)
		// 	categoryFind.rubrics = categoryFind.rubrics.filter(p => p.value !== rubric.value)
		// 	this.popupVisible = false;
		// },
		// removemydish(dish, rubric, category){
		// 	console.log('удаление блюда')
		// 	let categoryFind = this.categories.find(p => p.value == category.value)
		// 	let rubricFind = categoryFind.rubrics.find(p => p.value == rubric.value)
		// 	rubricFind.dishs = rubricFind.dishs.filter(p => p.value !== dish.value)
		// 	this.popupVisible = false;
		// },
		// removeabout(){
		// 	this.about.img = '';
		// 	this.popupVisibleImg = false;
		// },

		SET_ABOUT(state, about) {
			state.about = about;
		},
		EDIT_ABOUT(state, about) {
			state.about = about;
		},

		SET_CATEGORIES(state, categories) {
			state.categories = categories
			console.log(state.categories)
		},
		ADD_CATEGORIES(state, category) {
			console.log('add category')
			state.categories.push(category);
			console.log(state.categories)
		},
		EDIT_CATEGORIES(state, categories){
			state.categories = categories
			console.log(state.categories)
		},
		DELETE_CATEGORIES(state, category) {
			// this.categories = this.categories.filter(p => p.value !== category.value)
			console.log('del category')
			state.categories = state.categories.filter(p => p.value !== category.value)
		},


		ADD_RUBRIC(state, rubric, category_id) {
			console.log(rubric)
			console.log(rubric.value)
			let categoryFind = state.categories.find(p => p.value == category_id)
			if(categoryFind.rubrics.find(p => p.value == rubric.value)) {
				console.log('вносим изменения')
			}else{
			state.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		EDIT_RUBRIC(state, rubric, category_id){
			console.log(rubric)
			console.log(rubric.value)
			let categoryFind = state.categories.find(p => p.value == category_id)
			if(categoryFind.rubrics.find(p => p.value == rubric.value)) {
				console.log('вносим изменения')
			}else{
			state.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_RUBRIC(state, category, rubric) {
			console.log('удаление рубрики')
			let categoryFind = state.categories.find(p => p.value == category.value)
			categoryFind.rubrics = categoryFind.rubrics.filter(p => p.value !== rubric.value)
		},

		ADD_DISH(state, dish,  formlabel_id, formlabel_rubric_id) {
			let categoryFindForDish = state.categories.find(p => p.value == formlabel_id)
			let rubricFindForDish = categoryFindForDish.rubrics.find(p => p.value == formlabel_rubric_id)
			// console.log( categoryFindForDish)
			// console.log( rubricFindForDish)
			
	
			if(rubricFindForDish.dishs.find(p => p.value == dish.value)){
				console.log('вносим изменения')
			
				
			}else{
				if (Array.isArray(rubricFindForDish.dishs) != true){
				rubricFindForDish.dishs = [] }
				rubricFindForDish.dishs.push(dish) 
				console.log('добавляем в массив')
				}
			
			
			// console.log(Array.isArray(rubricFindForDish.dishs))
		},
		EDIT_DISH(state, rubric, category_id){
			console.log(rubric)
			console.log(rubric.value)
			let categoryFind = state.categories.find(p => p.value == category_id)
			if(categoryFind.rubrics.find(p => p.value == rubric.value)) {
				console.log('вносим изменения')
			}else{
			this.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_DISH(state, category, rubric) {
			console.log('удаление блюда')
			let categoryFind = this.categories.find(p => p.value == category.value)
			let rubricFind = categoryFind.rubrics.find(p => p.value == rubric.value)
			rubricFind.dishs = rubricFind.dishs.filter(p => p.value !== dish.value)
			this.popupVisible = false;
		},

		SET_LANGLIST(state, langList) {
			state.langList = langList
			console.log(langList)
		},
		SET_LANGLIST_RESERVE(state, langListReserve) {
			state.langListReserve = langListReserve
			console.log(langListReserve)
		},
		SET_LOADING (state, bool) {
			state.isUserLoading = bool
		},
		ADD_URL(state, urlTheme ) {
         state.templateUrl = urlTheme 
		},
	},
	actions: {
		// async addCategories({ commit, state }, category) {
			
			
		// 	//   const url = 'http://localhost:3000/user?project.categories=value';
		// 	//   const requestOptions = {
		// 	// 	 method: 'POST',
		// 	// 	 headers: { 'Content-Type': 'application/json' },
		// 	// 	 body: JSON.stringify(category)
		// 	//   };
			  
	
		// 	  try {
		// 		//  const response = await fetch(url,requestOptions);
				
	
		// 		 commit("ADD_CATEGORIES", category);
	
			
	
		// 		 return response.data;
	
		// 	  } catch (e) {
		// 		 console.log('ERROR => ', 'Unable to create category!', e);
		// 	  }
			
		//  },

		async addCategories({ commit, state }, category) {
 
			   const categories =  JSON.stringify(state.categories)
			   
			  try {
				// const response = await axios.post('http://localhost:3000/user/project/categories', category)
				// commit('SET_CATEGORIES', response.data)
				// const response = await axios({
				// 	method: "post",
				// 	url: "http://localhost:3000/user",
				// 	data:{
				// 		categories
				// 	}
					
				// });
				
				// return response.data
				 commit("ADD_CATEGORIES", category);
				//  commit('SET_CATEGORIES', response.data.project.categories)
			  } catch (e) {
				 console.log('ERROR => ', 'Unable to create category!', e);
			  }
			
		 },
		async editCategories({ commit, state }, categories) {
 
			// categories =  JSON.stringify(state.categories)
			   
			  try {
				// const response = await axios.post('http://localhost:3000/user/project/categories', category)
				// commit('SET_CATEGORIES', response.data)
				commit('EDIT_CATEGORIES', categories)
				// const response = await axios({
				// 	method: "post",
				// 	url: "http://localhost:3000/user",
				// 	data:{
				// 		categories
				// 	}
					
				// });
				console.log(state.categories)
				// return response.data
				//  commit("ADD_CATEGORIES", category);
				//  commit('SET_CATEGORIES', response.data.project.categories)
			  } catch (e) {
				 console.log('ERROR => ', 'Unable to create category!', e);
			  }
			
		 },
		// async fetchUser({state, commit}) {
		// 	try {
		// 		commit('SET_LOADING', true)
		// 		const response = await axios.get('http://localhost:3000/user')
		// 		commit('SET_ABOUT', response.data.about)		
		// 		commit('SET_CATEGORIES', response.data.categories)	
		// 		commit('SET_LANGLIST', response.data.langList) 	
		// 		commit('SET_LANGLIST_RESERVE',  response.data.langListReserve) 	
		// 	} catch (e) {
		// 		console.log(e)
		// 		// alert('Ошибка')
		// 	} finally {
		// 		commit('SET_LOADING', false)
		// 	}
		// },
		async fetchUser({state, commit}) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.get('http://localhost:3000/about')
				console.log(response)
				commit('SET_ABOUT', response.data)		
				// commit('SET_CATEGORIES', response.data.categories)	
				// commit('SET_LANGLIST', response.data.langList) 	
				// commit('SET_LANGLIST_RESERVE',  response.data.langListReserve) 	
				console.log(response)
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} finally {
				commit('SET_LOADING', false)
			}
		},
		async fetchCategories({state, commit}) {
			try {
			
				const response = await axios.get('http://localhost:3000/categories')
				console.log(response)
				commit('SET_CATEGORIES', response.data)		
				// commit('SET_CATEGORIES', response.data.categories)	
				// commit('SET_LANGLIST', response.data.langList) 	
				// commit('SET_LANGLIST_RESERVE',  response.data.langListReserve) 	
				console.log(response)
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} finally {
			
			}
		},
		async fetchLangList({state, commit}) {
			try {
				
				const response = await axios.get('http://localhost:3000/langList')
				// commit('SET_ABOUT', response.data.about)		
				// commit('SET_CATEGORIES', response.data.categories)	
				commit('SET_LANGLIST', response.data) 	
				// commit('SET_LANGLIST_RESERVE',  response.data.langListReserve) 	
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} finally {
			
			}
		},
		async fetchLangListReserve({state, commit}) {
			try {
				
				const response = await axios.get('http://localhost:3000/langListReserve')
				// commit('SET_ABOUT', response.data.about)		
				// commit('SET_CATEGORIES', response.data.categories)	
				commit('SET_LANGLIST_RESERVE', response.data) 	
				// commit('SET_LANGLIST_RESERVE',  response.data.langListReserve) 	
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} finally {
			
			}
		},
	   	
		// async testUser({state, commit}, $event){
		// 	console.log($event)
		// 	try {
				
		// 		const url = 'http://localhost:3000/user';
		// 	   const data =  JSON.stringify($event)
		// 		state.categories = $event
		// 		const response = await axios.post(url, data);
				
		// 		console.log(data);
		// 		console.log(response.data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// },

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
		 },
		 addRubric({commit},  rubric, category_id){
			commit("ADD_RUBRIC",  rubric, category_id);
		 }
	
	},
	namespaced:true 
}