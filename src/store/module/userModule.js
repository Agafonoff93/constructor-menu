import axios from 'axios'

export const userModule = {
	state: () => ({
		isUserLoading: false,
		templateUrl: '',
		user: {},
		about:
		{
			id: '',
			title: '',
			text: '',
			img: '',
		},
		categories: [],


		langList: [	{
			id: 1,
			name: "ru",
			value: "Russia",
			img: "/icon-lang/russia_1.png",
			unavailable: true,
		 },
		],

		langListReserve: [
		
		 {
			id: 2,
			name: "en",
			value: "English",
			img: "/icon-lang/united-kingdom_1.png",
			unavailable: false,
		 },
		 {
			id: 3,
			name: "fr",
			value: "France",
			img: "/icon-lang/france_1.png",
			unavailable: false,
		 },
		 {
			id: 4,
			name: "gr",
			value: "Germany",
			img: "/icon-lang/germany_1.png",
			unavailable: false,
		 },
		 {
			id: 5,
			name: "it",
			value: "Italy",
			img: "/icon-lang/italy_1.png",
			unavailable: false,
		 },
		 {
			id: 6,
			name: "sp",
			value: "Spain",
			img: "/icon-lang/spain_1.png",
			unavailable: false,
		 },
		 {
			id: 7,
			name: "ch",
			value: "China",
			img: "/icon-lang/china_1.png",
			unavailable: false,
			 },
			 { 
			id: 8,
			name: "jp",
			value: "Japan",
			img: "/icon-lang/japan_1.png",
			unavailable: false,
			 },
			 { 
			id: 9,
			name: "ua",
			value: "Ukraine",
			img: "/icon-lang/ukraine_1.png",
			unavailable: false,
			 },
			 { 
			id: 10,
			name: "cz",
			value: "CzechRepublic",
			img: "/icon-lang/czech-republic_1.png",
			unavailable: false,
			 },
		],
	}),
	getters: {

	},
	mutations: {

		SET_USER(state, user) {
			state.user = user;
		},
		EDIT_USER(state, isfirsttimeUser) {

			state.user.isfirsttimeUser = isfirsttimeUser
		},
		EDIT_USER_HINT(state, issecondContentUser) {
	
			state.user.issecondContentUser = issecondContentUser
		},
		SET_ABOUT(state, about) {
			state.about = about;
		},

		EDIT_ABOUT(state, about) {
			state.about = about;
		},

		SET_CATEGORIES(state, categories) {
			state.categories = categories

		},
		UPDATE_CATEGORIES(state, categories) {
			state.categories = categories

		},
		ADD_CATEGORIES(state, category) {

			state.categories.push(category);

		},
		EDIT_CATEGORIES(state, category) {

			let categoryFind = state.categories.find(p => p.value == category.value);
			categoryFind = category
			
			
		},
		DELETE_CATEGORIES(state, category) {
			// this.categories = this.categories.filter(p => p.value !== category.value)
	
			state.categories = state.categories.filter(p => p.value !== category.value)
		},


		ADD_RUBRIC(state, { rubric, category_id }) {
		
			let categoryFind = state.categories.find(p => p.value == category_id);
			if (categoryFind && categoryFind.rubrics.find(p => p.value == rubric.value)) {
		
			} else if (categoryFind) {
			  categoryFind.rubrics.push(rubric);
			} else {
			  console.log('категория не найдена');
			}
		 },
		EDIT_RUBRIC(state, { rubric, category_id }) {
	
			let categoryFind = state.categories.find(p => p.value == category_id)
			if (categoryFind.rubrics.find(p => p.value == rubric.value)) {
			
			} else {
		
				state.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_RUBRIC(state, { category, rubric }) {
		
			let categoryFind = state.categories.find(p => p.value == category.value)
			categoryFind.rubrics = categoryFind.rubrics.filter(p => p.value !== rubric.value)
		},

		ADD_DISH(state, {dish, formlabel_id, formlabel_rubric_id}) {
			let categoryFindForDish = state.categories.find(p => p.value == formlabel_id)
			let rubricFindForDish = categoryFindForDish.rubrics.find(p => p.value == formlabel_rubric_id)
		
			if (rubricFindForDish.dishs.find(p => p.value == dish.value)) {
				
			} else {
				if (Array.isArray(rubricFindForDish.dishs) != true) {
					rubricFindForDish.dishs = []
				}
				rubricFindForDish.dishs.push(dish)
		
			}


			// console.log(Array.isArray(rubricFindForDish.dishs))
		},
		EDIT_DISH(state, rubric, category_id) {
			
			let categoryFind = state.categories.find(p => p.value == category_id)
			if (categoryFind.rubrics.find(p => p.value == rubric.value)) {
				
			} else {
				this.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_DISH(state,{ dish, rubric, category }) {
			
			let categoryFind = state.categories.find(p => p.value == category.value)
			let rubricFind = categoryFind.rubrics.find(p => p.value == rubric.value)
			rubricFind.dishs = rubricFind.dishs.filter(p => p.value !== dish.value)
		},

		SET_LANGLIST(state, langList) {
			state.langList = langList
		
		},
		SET_LANGLIST_RESERVE(state, langListReserve) {
			state.langListReserve = langListReserve
			
		},
		ADD_LANGLIST(state, lang) {
			
			state.langList.push(lang);

		},
		ADD_LANGLIST_RESERVE(state, lang) {
			console.log(lang)
			state.langListReserve.push(lang);		
		},
		DELETE_LANGLIST(state, lang) {

			state.langList = state.langList.filter(p => p.value !== lang.value)
			
		},
		DELETE_LANGLIST_RESERVE(state, lang) {
			state.langListReserve = state.langListReserve.filter(p => p.value !== lang.value)
			
		},
		SET_LOADING(state, bool) {
			state.isUserLoading = bool
		},
		ADD_URL(state, urlTheme) {
			state.templateUrl = urlTheme
		},
		ADD_LANG_ITEM(state, lang) {
		
			state.about.title[lang.name] = state.about.title.ru
			state.about.text[lang.name] = state.about.text.ru
			for (let i = 0; i < state.categories.length; i++) {
				const category = state.categories[i];
				category.label[lang.name] = category.label.ru
				category.text[lang.name] = category.text.ru

				for (let i = 0; i < category.rubrics.length; i++) {
					const rubric = category.rubrics[i];
					rubric.label[lang.name] = rubric.label.ru
					rubric.text[lang.name] = rubric.text.ru

					for (let i = 0; i < rubric.dishs.length; i++) {
						const dish = rubric.dishs[i];
						dish.label[lang.name] = dish.label.ru
						dish.text[lang.name] = dish.text.ru
					}
				}

			}
			
		}
	},
	actions: {
		async fetchUser({ state, commit }) {
			try {	
				const response = await axios.get('http://localhost:3000/user')
				commit('SET_USER', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				
			}
		},
		async editUser({ state, commit }, isfirsttimeUser) {
			try {
				commit('EDIT_USER', isfirsttimeUser )
			
			  const response = await axios.post('http://localhost:3000/user', 
				state.user )
			
			
			} catch (e) {
			  console.log(e)
			  // alert('Ошибка')
			}
		 },
		async editUserSecondContent({ state, commit }, usersecondContent) {
			try {
				commit('EDIT_USER_HINT', usersecondContent )
			
			  const response = await axios.post('http://localhost:3000/user', 
				state.user )
			
			
			} catch (e) {
			  console.log(e)
			  // alert('Ошибка')
			}
		 },

		 async fetchAbout({ state, commit }) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.get('http://localhost:3000/about')
				commit('SET_ABOUT', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('SET_LOADING', false)
			}
		},

		 async editAbout({ state, commit }, data) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.post('http://localhost:3000/about', state.about)
				commit('SET_ABOUT', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('SET_LOADING', false)
			}
		},

		 async fetchCategories({ state, commit }) {
			try {
				const response = await axios.get('http://localhost:3000/categories')
				commit('SET_CATEGORIES', response.data)			
			} catch (e) {
				console.log(e)
			} finally {

			}
		},
		async addCategories({ commit, state }, category) {
				try {		  
			  const response = await axios.post('http://localhost:3000/categories', 
			  category )
			 
			  commit('ADD_CATEGORIES', response.data )
			} catch (e) {
			  console.log(e)
			}
		},

		async editCategories({ commit, state }, category) {
			try {
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`, 
				category )
				commit('EDIT_CATEGORIES', response.data)		
			} catch (e) {
				console.log(e);
			}

		},
		async removeCategories({ commit, state }, category) {
			try {
				const response = await axios.delete(`http://localhost:3000/categories/${category.value}` )
				commit('DELETE_CATEGORIES', category)		
			} catch (e) {
				console.log(e);
			}

		},

		async addRubric({ commit, state },{ rubric, category_id}) {
			try {	
				commit('ADD_RUBRIC', { rubric, category_id })  
				const category = state.categories.find(p => p.value == category_id)
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				category)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async editRubric({ commit, state },{ rubric, category_id}) {
			try {	
				commit('EDIT_RUBRIC', { rubric, category_id })  
				const category = state.categories.find(p => p.value == category_id)
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				category)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async removeRubric({ commit, state }, { category, rubric }) {
			try {	
				commit('DELETE_RUBRIC',  { category, rubric })  
				
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				category)
			
		} catch (e) {
		  console.log(e)
		}
		},

		async addDish({ commit, state },{ dish, formlabel_id, formlabel_rubric_id}) {
			try {	
				commit('ADD_DISH', { dish, formlabel_id, formlabel_rubric_id })  
				const category = state.categories.find(p => p.value == formlabel_id)
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				category)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async removeDish({ commit, state }, { dish, rubric, category }) {
			try {	
				commit('DELETE_DISH', { dish, rubric, category })  
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				category)
			
		} catch (e) {
		  console.log(e)
		}
		},

		async fetchLangList({ state, commit }) {
			try {
				const response = await axios.get('http://localhost:3000/langList')	
				commit('SET_LANGLIST', response.data) 	
			} catch (e) {
				console.log(e)
			} finally {

			}
		},

		 async fetchAllData({ state, commit }) {
			try {
			  commit('SET_LOADING', true)
			  const [userData, aboutData, categoriesData, langListData, LangListReserveData] = await Promise.all([
				 axios.get('http://localhost:3000/user'),
				 axios.get('http://localhost:3000/about'),
				 axios.get('http://localhost:3000/categories'),
				 axios.get('http://localhost:3000/langList'),
				 axios.get('http://localhost:3000/LangListReserve'),
			  ])
			  commit('SET_USER', userData.data)
			  commit('SET_ABOUT', aboutData.data)
			  commit('SET_CATEGORIES', categoriesData.data)
			  commit('SET_LANGLIST', langListData.data)
			  commit('SET_LANGLIST_RESERVE', LangListReserveData.data)
			} catch (e) {
			  console.log(e)
			} finally {
			  commit('SET_LOADING', false)
			}
		 },
		 async fetchAddLangItem({ state, commit }, lang) {
			commit('ADD_LANG_ITEM', lang); 
			try {
			  const aboutData = await axios.post('http://localhost:3000/about', state.about);
			  console.log(aboutData.data)
			  commit('SET_ABOUT', aboutData.data);
			} catch (e) {
			  console.log(e);
			}
		 
			try {
			  const categoriesData = await Promise.all(state.categories.map(category => axios.put(`http://localhost:3000/categories/${category.value}`, category)));
			  console.log( categoriesData.data)
			  commit('SET_CATEGORIES', categoriesData.map(data => data.data));
			} catch (e) {
			  console.log(e);
			}
		 
		
			try {
				
				const langListData = await axios({
					method: "post",
					url: "http://localhost:3000/langList",
					data: lang
				});
				commit('ADD_LANGLIST',langListData.data)
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			}
		 
			try {
				const LangListReserveData = await axios.delete(`http://localhost:3000/langListReserve/${lang.value}`)
				commit('DELETE_LANGLIST_RESERVE', lang)

			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			}
			
		 },
		 async fetchRemoveLangItem({ state, commit }, lang) {
			
			try {

				const LangListReserveData = await axios.post('http://localhost:3000/langListReserve', lang)

				commit('ADD_LANGLIST_RESERVE', LangListReserveData.data)

			} catch (e) {
				console.log(e)
			} 
		 
			try {
				console.log(lang)
				const langListData = await axios.delete(`http://localhost:3000/langList/${lang.value}`)			
				commit('DELETE_LANGLIST', lang)

			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} 

			
		 },
		//  store.dispatch('user/addLangList', lang);
		//  store.dispatch('user/removeLangListReserve', lang);
		//  store.dispatch('user/addLangItem', lang);

		addUrl({ commit }, urlTheme) {
			commit("ADD_URL", urlTheme);
		},
		

	},
	namespaced: true
}