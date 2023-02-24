// import axios from 'axios'

export const meaningModule = {
	state:() => ({
		visibleEditingLanguage: false,
		translationLabel: '',
		translationText:'',	
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
		}
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
		}
	
	  
	},
	namespaced:true 
}