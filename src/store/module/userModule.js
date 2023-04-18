import axios from 'axios'

export const userModule = {
	state: () => ({
		isUserLoading: false,
		userId: null,
		linkPlug: '/image/example-qr-code.svg' ,
		userSet:{},
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
			img: "icon-lang/russia_1.png",
			unavailable: true,
		 },
		],

		langListReserve: [
		
		 {
			id: 2,
			name: "en",
			value: "English",
			img: "icon-lang/united-kingdom_1.png",
			unavailable: false,
		 },
		 {
			id: 3,
			name: "fr",
			value: "France",
			img: "icon-lang/france_1.png",
			unavailable: false,
		 },
		 {
			id: 4,
			name: "gr",
			value: "Germany",
			img: "icon-lang/germany_1.png",
			unavailable: false,
		 },
		 {
			id: 5,
			name: "it",
			value: "Italy",
			img: "icon-lang/italy_1.png",
			unavailable: false,
		 },
		 {
			id: 6,
			name: "sp",
			value: "Spain",
			img: "icon-lang/spain_1.png",
			unavailable: false,
		 },
		 {
			id: 7,
			name: "ch",
			value: "China",
			img: "icon-lang/china_1.png",
			unavailable: false,
			 },
			 { 
			id: 8,
			name: "jp",
			value: "Japan",
			img: "icon-lang/japan_1.png",
			unavailable: false,
			 },
			 { 
			id: 9,
			name: "ua",
			value: "Ukraine",
			img: "icon-lang/ukraine_1.png",
			unavailable: false,
			 },
			 { 
			id: 10,
			name: "cz",
			value: "CzechRepublic",
			img: "icon-lang/czech-republic_1.png",
			unavailable: false,
			 },
		],
		visibleEditingLanguage: false,
		translationLabel: '',
		translationText:'',
		itemGroupTranslation:'',	
	}),
	getters: {
		getVisibleEditingLanguage: state => state.visibleEditingLanguage,
	},
	mutations: {
		SET_USER_ID(state, userId){
			state.userId = userId
			console.log(userId)
		},
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
			
			state.userSet.projects[0].menu.categories.push(category);
			state.categories = state.userSet.projects[0].menu.categories

		},
		EDIT_CATEGORIES(state, category) {

			let categoryFind = state.userSet.projects[0].menu.categories.find(p => p.value == category.value);
			categoryFind = category
			
			
		},
		DELETE_CATEGORIES(state, category) {
			// this.categories = this.categories.filter(p => p.value !== category.value)
	
			state.categories = state.categories.filter(p => p.value !== category.value)
			state.userSet.projects[0].menu.categories = state.categories 
		},


		ADD_RUBRIC(state, { rubric, category_id }) {
		
			let categoryFind = state.userSet.projects[0].menu.categories.find(p => p.value == category_id);
			if (categoryFind && categoryFind.rubrics.find(p => p.value == rubric.value)) {
		
			} else if (categoryFind) {
			  categoryFind.rubrics.push(rubric);
			} else {
			  console.log('категория не найдена');
			}
		 },
		EDIT_RUBRIC(state, { rubric, category_id }) {
	
			let categoryFind = state.userSet.projects[0].menu.categories(p => p.value == category_id)
			if (categoryFind.rubrics.find(p => p.value == rubric.value)) {
			
			} else {
		
				state.userSet.projects[0].menu.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_RUBRIC(state, { category, rubric }) {
		
			let categoryFind =state.userSet.projects[0].menu.categories.find(p => p.value == category.value)
			categoryFind.rubrics = categoryFind.rubrics.filter(p => p.value !== rubric.value)
		},

		ADD_DISH(state, {dish, formlabel_id, formlabel_rubric_id}) {
			let categoryFindForDish = state.userSet.projects[0].menu.categories.find(p => p.value == formlabel_id)
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
			
			let categoryFind = state.userSet.projects[0].menu.categories.find(p => p.value == category_id)
			if (categoryFind.rubrics.find(p => p.value == rubric.value)) {
				
			} else {
				state.userSet.projects[0].menu.categories.find(p => p.value == category_id).rubrics.push(rubric)
			}
		},
		DELETE_DISH(state,{ dish, rubric, category }) {
			
			let categoryFind = state.userSet.projects[0].menu.categories.find(p => p.value == category.value)
			let rubricFind = categoryFind.rubrics.find(p => p.value == rubric.value)
			rubricFind.dishs = rubricFind.dishs.filter(p => p.value !== dish.value)
		},

		SET_LANGLIST(state, langList) {
			state.langList = state.userSet.projects[0].menu.langList
			console.log('установка языка основного')
		
		},
		SET_LANGLIST_RESERVE(state, langListReserve) {
			
			state.langListReserve = state.userSet.projects[0].menu.langListReserve
			console.log('установка языка резервного')
		},
		ADD_LANGLIST(state, lang) {
			
			state.langList.push(lang);
			state.userSet.projects[0].menu.langList = state.langList
		
			

		},
		ADD_LANGLIST_RESERVE(state, lang) {
			console.log(lang)
			state.langListReserve.push(lang);
			state.userSet.projects[0].menu.langListReserve = state.langListReserve
		
		},
		DELETE_LANGLIST(state, lang) {

			state.langList = state.langList.filter(p => p.value !== lang.value)
			state.userSet.projects[0].menu.langList = state.langList
			
			
		},
		DELETE_LANGLIST_RESERVE(state, lang) {
			state.langListReserve = state.langListReserve.filter(p => p.value !== lang.value)
			state.userSet.projects[0].menu.langListReserve = state.langListReserve
		},
		SET_LOADING(state, bool) {
			state.user.isUserLoading = bool
		},
		ADD_URL(state, urlTheme) {
			state.user.templateUrl = urlTheme
			state.userSet.projects[0] = state.user
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
			state.userSet.projects[0].menu.about = state.about
			state.userSet.projects[0].menu.categories = state.categories
		},
		SET_QRCODE(state, link) {
		},
		GET_QRCODE(state, link) {
		
			state.user.linkQrCode = link
			state.userSet.projects[0] = state.user
		
		},
		SET_LINK(state, link){
		
			state.user.templateUrl = link
			state.userSet.projects[0] = state.user
		},
		SET_THEMENAME(state, theme){
		
			state.user.theme = theme
			state.userSet.projects[0] = state.user
		},

		SET_USER_DATA(state, userSet){
			state.userSet = userSet
			console.log(state.userSet)
			state.user = state.userSet.projects[0]
			state.about = state.userSet.projects[0].menu.about;
			state.categories = state.userSet.projects[0].menu.categories
			state.langList = state.userSet.projects[0].menu.langList
			state.langListReserve = state.userSet.projects[0].menu.langListReserve
		},

		SET_EDITING_LANG(state, visibleEditingLanguage) {
			state.visibleEditingLanguage = visibleEditingLanguage
		 },
		SET_TRANSLATION_LABEL(state, translationLabel) {
			state.translationLabel = translationLabel
		},
		SET_TRANSLATION_TEXT(state, translationText) {
			state.translationText = translationText
		},
		SET_TRANSLATION_ITEM(state, itemGroupTranslation) {
			state.itemGroupTranslation = itemGroupTranslation
		},
	},
	actions: {
		setIdUser( {commit}, userId) {
			commit('SET_USER_ID', userId)
		},
		// Действие fetchUser извлекает пользовательские данные с сервера и фиксирует их в состояние, используя мутацию SET_USER.
		async fetchUser({ state, commit }) {
			try {	
				const response = await axios.get(`http://localhost:3000/users/${state.userId}`)
				console.log(state.userId)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				
			}
		},

		// Действия editUser  изменяют пользовательские данные в состоянии и отправляют обновленные данные на сервер.
		async editUser({ state, commit }, isfirsttimeUser) {
			try {
				commit('EDIT_USER', isfirsttimeUser )
			
		
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
				commit('SET_USER_DATA', response.data)
			
			} catch (e) {
			  console.log(e)
			  // alert('Ошибка')
			}
		 },

		//  Действия editUserSecondContent изменяют пользовательские данные в состоянии и отправляют обновленные данные на сервер.
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

		//  Действие fetchAbout извлекает раздел веб-сайта «о нас» с сервера и переводит его в состояние с помощью мутации SET_ABOUT.
		 async fetchAbout({ state, commit }) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.get(`http://localhost:3000/users/${state.userId}`)
				console.log(state.userId)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('SET_LOADING', false)
			}
		},

		// Действие editAbout изменяет данные «о нас» в состоянии и отправляет обновленные данные на сервер.
		 async editAbout({ state, commit }, data) {
			 try {
				 commit('SET_LOADING', true)
				 commit('SET_ABOUT', data)
				 const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				 console.log(state.userId)
			} catch (e) {
				console.log(e)
			} finally {
				commit('SET_LOADING', false)
			}
		},

		// Действие fetchCategories получает список категорий с сервера и фиксирует его в состояние с помощью мутации SET_CATEGORIES.
		 async fetchCategories({ state, commit }) {
			try {
				const response = await axios.get(`http://localhost:3000/users/${state.userId}`)
				console.log(state.userId)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
			} finally {

			}
		},

		// Действия addCategories, editCategories и removeCategories изменяют список категорий в состоянии и отправляют обновленные данные на сервер.
		async addCategories({ commit, state }, category) {
				try {	
			  commit('ADD_CATEGORIES', category )			  
			//   const response = await axios.post('http://localhost:3000/categories', 
			//   category )
			const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
			console.log(state.userId)
			  
			 
			} catch (e) {
			  console.log(e)
			}
		},
		async editCategories({ commit, state }, category) {
			try {
				commit('EDIT_CATEGORIES', category)		
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			} catch (e) {
				console.log(e);
			}

		},
		async removeCategories({ commit, state }, category) {
			try {
				commit('DELETE_CATEGORIES', category)		
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			} catch (e) {
				console.log(e);
			}

		},

		// Действия addRubric, editRubric и removeRubric изменяют рубрики для категории в состоянии и отправляют обновленные данные на сервер.
		async addRubric({ commit, state },{ rubric, category_id}) {
			try {	
				commit('ADD_RUBRIC', { rubric, category_id })  
				// const category = state.categories.find(p => p.value == category_id)
				// const response = await axios.patch(`http://localhost:3000/categories/${category.value}`,
				// category)
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async editRubric({ commit, state },{ rubric, category_id}) {
			try {	
				commit('EDIT_RUBRIC', { rubric, category_id })  
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async removeRubric({ commit, state }, { category, rubric }) {
			try {	
				commit('DELETE_RUBRIC',  { category, rubric })  
				
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			
		} catch (e) {
		  console.log(e)
		}
		},

		// Действия addDish и removeDish изменяют список блюд для рубрики в состоянии и отправляют обновленные данные на сервер.
		async addDish({ commit, state },{ dish, formlabel_id, formlabel_rubric_id}) {
			try {	
				commit('ADD_DISH', { dish, formlabel_id, formlabel_rubric_id })  
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			
		} catch (e) {
		  console.log(e)
		}
		},
		async removeDish({ commit, state }, { dish, rubric, category }) {
			try {	
				commit('DELETE_DISH', { dish, rubric, category })  
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				console.log(state.userId)
			
		} catch (e) {
		  console.log(e)
		}
		},

		// Действие fetchLangList извлекает список доступных языков с сервера и фиксирует его в состоянии с помощью мутации SET_LANGLIST.
		async fetchLangList({ state, commit }) {
			try {
				commit('SET_LANGLIST', response.data) 	
				const response = await axios.get(`http://localhost:3000/users/${userId}`)
				console.log(userId)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
			} finally {

			}
		},

		//  Получаем все данные из базы данных, включая информацию о пользователе, информацию о нас, категории, список языков и резервный список языков.
		//  async fetchAllData({ state, commit }) {
		// 	try {
		// 	  commit('SET_LOADING', true)
		// 	  const [userData, aboutData, categoriesData, langListData, LangListReserveData] = await Promise.all([
		// 		 axios.get('http://localhost:3000/user'),
		// 		 axios.get('http://localhost:3000/about'),
		// 		 axios.get('http://localhost:3000/categories'),
		// 		 axios.get('http://localhost:3000/langList'),
		// 		 axios.get('http://localhost:3000/LangListReserve'),
		// 	  ])
		// 	  commit('SET_USER', userData.data)
		// 	  commit('SET_ABOUT', aboutData.data)
		// 	  commit('SET_CATEGORIES', categoriesData.data)
		// 	  commit('SET_LANGLIST', langListData.data)
		// 	  commit('SET_LANGLIST_RESERVE', LangListReserveData.data)
		// 	} catch (e) {
		// 	  console.log(e)
		// 	} finally {
		// 	  commit('SET_LOADING', false)
		// 	}	
		//  },

		async fetchUserData({ commit }, userId) {
			try {
				commit('SET_LOADING', true)
				const response = await axios.get(`http://localhost:3000/users/${userId}`)
				console.log(userId)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
			} finally {
				commit('SET_LOADING', false)
			}
		},

		//  Добавляет языковую версию в состояние Vuex хранилища через мутацию ADD_LANG_ITEM.
		 async fetchAddLangItem({ state, commit }, lang) {
			commit('ADD_LANG_ITEM', lang); 
			// try {
			// 	const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
			// 	commit('SET_USER_DATA', response.data)
			// } catch (e) {
			//   console.log(e);
			// }
		 
			// try {
			//   const categoriesData = await Promise.all(state.categories.map(category => axios.put(`http://localhost:3000/categories/${category.value}`, category)));
			//   console.log( categoriesData.data)
			//   commit('SET_CATEGORIES', categoriesData.map(data => data.data));
			// } catch (e) {
			//   console.log(e);
			// }
		 
		
			try {
					//  Добавляет выбранный язык на языковую панель
					commit('ADD_LANGLIST',lang)
					const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
					commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			}
		 
			try {
				//  Удаляет выбранный язык с резевного списка 
			
				commit('DELETE_LANGLIST_RESERVE', lang)
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			}
			
		 },

		 //  Удаляет языковую версию из основной языковой панели и добавляет в резервную.
		 async fetchRemoveLangItem({ state, commit }, lang) {
			
			try {

				commit('ADD_LANGLIST_RESERVE', lang)
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)


			} catch (e) {
				console.log(e)
			} 
		 
			try {
				
				commit('DELETE_LANGLIST', lang)
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)	

			} catch (e) {
				console.log(e)
				// alert('Ошибка')
			} 

			
		 },

		//  Получаем сгенерированный qr code
		 async getQrCode({ state, commit }, link) {
			
			try {

				const response = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?data=${link}&size=250x250`)
				commit('GET_QRCODE', response.data)
				
			} catch (e) {
				console.log(e)
			} 
			try {
			
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)
			
			
			} catch (e) {
			  console.log(e)
			}
			
		 },

		//  Добавляем ссылку на меню в данные пользователя
		 async setLinkTemplate({commit, state}, link){
			
		
			try {
				commit("SET_LINK",link);
			
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)
			
			
			} catch (e) {
			  console.log(e)
			  // alert('Ошибка')
			}
		 },
		 async setThemeName({commit, state}, theme ){
			
		
			try {
				commit("SET_THEMENAME",theme);
			
				const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
				commit('SET_USER_DATA', response.data)
			
			
			} catch (e) {
			  console.log(e)
			  // alert('Ошибка')
			}
		 },

		//  Передаем сслыку из выбранного меню в остояние Vuex хранилища
		addUrl({ commit }, urlTheme) {
			commit("ADD_URL", urlTheme);
		},

		toggleEditingLanguage({ commit, state }) {
			commit('SET_EDITING_LANG', !state.visibleEditingLanguage)
		 },
		changeTranslationLabel ( { commit, state }, translationLabel) {
			commit('SET_TRANSLATION_LABEL', translationLabel)
		},
		changeTranslationText ( { commit, state }, translationText) {
			commit('SET_TRANSLATION_TEXT', translationText)
		},
		assignTranslationItem ( { commit, state }, itemGroupTranslation) {
			
			commit('SET_TRANSLATION_ITEM', itemGroupTranslation)
		},
			// Данный запрос на сервер для изменения информации о переводе "about". В запросе передается объект "about", содержащий новые значения для заголовка и текста перевода.
			async editTranslationItemAbout({  commit, state }, about) {
				try {
				
					commit('SET_TRANSLATION_LABEL', about)		
					commit('SET_TRANSLATION_TEXT', about)		
					const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
						commit('SET_USER_DATA', response.data)
				} catch (e) {
					console.log(e);
				}
	
			},
	
			// Данный запрос на сервер для изменения информации о переводе "category". В запросе передается объект "category", содержащий новые значения для заголовка и текста перевода.
			async editTranslationItem({ commit, state}, category) {
				try {
					
					commit('SET_TRANSLATION_LABEL',category)		
					commit('SET_TRANSLATION_TEXT', category)		
					const response = await axios.patch(`http://localhost:3000/users/${state.userId}`, state.userSet)
						commit('SET_USER_DATA', response.data)
				} catch (e) {
					console.log(e);
				}
	
			},
		
		async sendHtml({commit}, html) {
		
		  try {
			
		
		  const response = await axios.post('http://localhost:3000/html', { html })
		  console.log('Ответ сервера:', response);
		
		} catch (e) {
		  console.log(e)
		  // alert('Ошибка')
		}
		}

	},
	namespaced: true
}