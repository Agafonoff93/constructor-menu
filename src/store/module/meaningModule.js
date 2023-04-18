import axios from 'axios'

export const meaningModule = {
	state:() => ({
		visibleEditingLanguage: false,
		translationLabel: '',
		translationText:'',
		itemGroupTranslation:'',	
	}),
	getters: {
		getVisibleEditingLanguage: state => state.visibleEditingLanguage,
	},
	mutations: {
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
		async editTranslationItemAbout({  commit, state, getters, rootGetters }, about) {
			try {
				const userId = rootGetters['userModule/getUserId']
				const userSet = rootGetters['userModule/getUserSet']
				commit('SET_TRANSLATION_LABEL', about)		
				commit('SET_TRANSLATION_TEXT', about)		
				const response = await axios.patch(`http://localhost:3000/users/${userId}`, userSet)
					commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e);
			}

		},

		// Данный запрос на сервер для изменения информации о переводе "category". В запросе передается объект "category", содержащий новые значения для заголовка и текста перевода.
		async editTranslationItem({ commit, state, getters, rootGetters }, category) {
			try {
				const userId = rootGetters['userModule/getUserId']
				const userSet = rootGetters['userModule/getUserSet']
				commit('SET_TRANSLATION_LABEL',category)		
				commit('SET_TRANSLATION_TEXT', category)		
				const response = await axios.patch(`http://localhost:3000/users/${userId}`, userSet)
					commit('SET_USER_DATA', response.data)
			} catch (e) {
				console.log(e);
			}

		},
	  
	},
	namespaced:true 
}