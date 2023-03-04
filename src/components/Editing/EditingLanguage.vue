<template>

	<div  class="page__input input-page input-page_category">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
							Укажите перевод  версии меню на другом языке <span class="_uppercase">({{ locale }})</span>. Если всё в порядке, нажмите на кнопку “Сохранить” внизу экрана.
						</div>
						<div class="input-page__box box-input">
							<div class="box-input__label _label">Перевод для <span class="_uppercase">({{ locale }})</span> версии меню</div>
							<div class="box-input__block">
								<my-input 							
								type="text" 
								placeholder="Напишите перевод"
								v-model="translationLabel[locale]"
								:limit="100"
								/>
								<div class="box-input__label _label">Оригинал:</div>
								<div class="box-input__label box-input__label-info _label">{{ translationLabel.ru }}</div>
							
							</div>
							
							<div class="box-input__block">
								<div class="box-input__wrapper">
									<my-textarea 
									
									v-model="translationText[locale]"
									:limit="1200"
									></my-textarea>
									
								</div>
								<div class="box-input__label _label">Оригинал:</div>
								<div class="box-input__label box-input__label-info _label">{{  translationText.ru }}</div>
							</div>	
						</div>

					</div>
				</div>
			
					

					<button-orange 
					@click="hideEditingLanguage"
					>
					Сохранить
					</button-orange>
					
				
		</div>
</template>


<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
   name: 'EditingLanguage',
  props: {
	
	locale: {
		type: [String, Number],
		required: true
	},
	
  },
 
	data() {
		return {
		
			

		}
	},
	
	methods: {
		...mapMutations({

		}),
		...mapActions({
			changeTranslationLabel: 'meaning/changeTranslationLabel',
			changeTranslationText: 'meaning/changeTranslationText',
			assignTranslationItem: 'meaning/assignTranslationItem',
			toggleEditingLanguage: 'meaning/toggleEditingLanguage',
			addLangItem: '/user/addLangItem',
			editTranslationItem: 'meaning/editTranslationItem',
			editTranslationItemAbout: 'meaning/editTranslationItemAbout',
		}),
			hideEditingLanguage(){
				
				if (this.itemGroupTranslation.hasOwnProperty('title')) {
			
				this.editTranslationItemAbout(this.itemGroupTranslation)
				} else {
				
				this.editTranslationItem(this.itemGroupTranslation)
				}
				this.toggleEditingLanguage()
					
			},
	    
		},
		
		computed: {
		...mapState({
			
			translationLabel: state => state.meaning.translationLabel,
			translationText: state => state.meaning.translationText,
			itemGroupTranslation: state => state.meaning.itemGroupTranslation,
			visibleEditingLanguage: state => state.meaning.visibleEditingLanguage
		}),
		...mapGetters({
			// toggleEditingLanguage: state => state.meaning.toggleEditingLanguage
	})
  },
	mounted() {
		
	
  }
	
	
}
</script>

<style scoped>

._uppercase {
	text-transform: uppercase;
}
.ui__container {
  /* min-height: 50px;
  padding-bottom: 55px; */
}

.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}

.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  width:100%;
  line-height: 15px;
  color: #EB5757;
}


</style>