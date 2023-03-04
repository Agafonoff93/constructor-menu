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
		async editTranslationItemAbout({ commit, state }, about) {
			try {
				
				const response = await axios.patch(`http://localhost:3000/about`, 
				about )
				commit('SET_TRANSLATION_LABEL', response.data)		
				commit('SET_TRANSLATION_TEXT', response.data)		
			} catch (e) {
				console.log(e);
			}

		},
		async editTranslationItem({ commit, state }, category) {
			try {
				
				const response = await axios.patch(`http://localhost:3000/categories/${category.value}`, 
				category )
				commit('SET_TRANSLATION_LABEL', response.data)		
				commit('SET_TRANSLATION_TEXT', response.data)		
			} catch (e) {
				console.log(e);
			}

		},
	  
	},
	namespaced:true 
}