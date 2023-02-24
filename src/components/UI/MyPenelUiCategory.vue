<template>
		<transition  name="popup-transition">
	<div 
	v-if="showUi"
	@click.stop="hideUi" 
	class="ui__wrapper-transparent">
	<div @click.stop class="ui__container _container">	
		<div  class="ui__fixed-wrapper">
		
			<div class="ui__buttons">				
				<div  class="ui__buttons-panel buttons-panel">
					<div class="buttons-panel__top">
						<div   class="buttons-panel__title">Параметры категории </div>
						<button 
						@click="hideUi" 
						class="buttons-panel__cancel"
						>Отменить</button>
					</div>
					<div class="buttons-panel__bottom">
						<button @click="seeEditingRubric" class="ui__button-add">
							
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="#F78408"/>
							</svg>

							<span>Добавить рубрику</span>
						</button>
						<div class="buttons-panel__editing">
							<button @click="seeEditingLanguage(category)" class="buttons-panel__сorrect buttons-panel__сorrect_tr">
								[Tr]
							</button>
							<button @click="seeEditingCategory" class="buttons-panel__сorrect">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.3333 5.03334C17.3339 4.92367 17.3129 4.81495 17.2715 4.71342C17.23 4.61188 17.1689 4.51954 17.0916 4.44167L13.5583 0.908337C13.4804 0.831103 13.3881 0.769998 13.2866 0.728528C13.185 0.687057 13.0763 0.666036 12.9666 0.66667C12.857 0.666036 12.7482 0.687057 12.6467 0.728528C12.5452 0.769998 12.4528 0.831103 12.375 0.908337L10.0166 3.26667L0.908307 12.375C0.831072 12.4529 0.769968 12.5452 0.728497 12.6467C0.687027 12.7483 0.666006 12.857 0.66664 12.9667V16.5C0.66664 16.721 0.754437 16.933 0.910718 17.0893C1.067 17.2455 1.27896 17.3333 1.49997 17.3333H5.03331C5.14991 17.3397 5.26655 17.3214 5.37566 17.2798C5.48476 17.2382 5.5839 17.1741 5.66664 17.0917L14.725 7.98334L17.0916 5.66667C17.1677 5.5859 17.2297 5.49295 17.275 5.39167C17.283 5.32525 17.283 5.2581 17.275 5.19167C17.2789 5.15288 17.2789 5.1138 17.275 5.075L17.3333 5.03334ZM4.69164 15.6667H2.33331V13.3083L10.6083 5.03334L12.9666 7.39167L4.69164 15.6667ZM14.1416 6.21667L11.7833 3.85834L12.9666 2.68334L15.3166 5.03334L14.1416 6.21667Z" fill="#828282"/>
								</svg>

							</button>
							<button @click="showPopup"  class="buttons-panel__delete">
								<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.6667 3.99999H11.3333V3.16666C11.3333 2.50362 11.0699 1.86773 10.6011 1.39889C10.1323 0.930049 9.49637 0.666656 8.83333 0.666656H7.16667C6.50363 0.666656 5.86774 0.930049 5.3989 1.39889C4.93006 1.86773 4.66667 2.50362 4.66667 3.16666V3.99999H1.33333C1.11232 3.99999 0.900358 4.08779 0.744078 4.24407C0.587797 4.40035 0.5 4.61231 0.5 4.83332C0.5 5.05434 0.587797 5.2663 0.744078 5.42258C0.900358 5.57886 1.11232 5.66666 1.33333 5.66666H2.16667V14.8333C2.16667 15.4964 2.43006 16.1322 2.8989 16.6011C3.36774 17.0699 4.00363 17.3333 4.66667 17.3333H11.3333C11.9964 17.3333 12.6323 17.0699 13.1011 16.6011C13.5699 16.1322 13.8333 15.4964 13.8333 14.8333V5.66666H14.6667C14.8877 5.66666 15.0996 5.57886 15.2559 5.42258C15.4122 5.2663 15.5 5.05434 15.5 4.83332C15.5 4.61231 15.4122 4.40035 15.2559 4.24407C15.0996 4.08779 14.8877 3.99999 14.6667 3.99999ZM6.33333 3.16666C6.33333 2.94564 6.42113 2.73368 6.57741 2.5774C6.73369 2.42112 6.94565 2.33332 7.16667 2.33332H8.83333C9.05435 2.33332 9.26631 2.42112 9.42259 2.5774C9.57887 2.73368 9.66667 2.94564 9.66667 3.16666V3.99999H6.33333V3.16666ZM12.1667 14.8333C12.1667 15.0543 12.0789 15.2663 11.9226 15.4226C11.7663 15.5789 11.5543 15.6667 11.3333 15.6667H4.66667C4.44565 15.6667 4.23369 15.5789 4.07741 15.4226C3.92113 15.2663 3.83333 15.0543 3.83333 14.8333V5.66666H12.1667V14.8333Z" fill="#EB5757"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
	    	
		</div>
	</div>
	</div>
</transition>
	<transition name="popup-transition">
		<my-popup 
			@removecategory="$emit('removecategory', category)"
			v-model:show="popupVisible"
			>
			<div class="popup__title">
					Удаление категории
				</div>
				<div class="popup__text">
					Вы уверены, что хотите удалить категорию <span class="_bold-light">“{{ category.label.ru }}”</span>? <span v-if="category.rubrics.length != 0" >Вместе с ней будут удалены все рубрики ({{ category.rubrics.length}}) <span v-if="dishsLength != 0">и блюда ({{ dishsLength }})</span>.</span> 
					
				
				</div>
				<div class="popup__buttons">
					<button 
					class="popup__cancel"
					@click="hidePopup"
					>
						Отменить
					</button>
					<button 
					@click="$emit('removecategory', category)" 
				
					class="popup__agree"
					>
						Да, удалить
					</button>
				
				</div>
				
	 </my-popup>
	</transition>
	
</template>

<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	props: {
		isFocus: {
			type: [Boolean,Object, null]
		},
		showUi: {
			type:Boolean,
			default:false
		},
		category: {
			type: Object,
			required: true,		
		},
		locale: {
			type: String,
			required: true,		
		},

	},
	data() {
	return {
		dishsQuantity: null,
		popupVisible: false,
	}
  },


  emits: ['removecategory','getClose','seeEditingRubric','seeEditingCategory','seeEditingLanguage'],
	methods: {
		...mapActions({
			changeTranslationLabel: 'meaning/changeTranslationLabel',
			changeTranslationText: 'meaning/changeTranslationText',
			toggleEditingLanguage:'meaning/toggleEditingLanguage',
		}),
	seeEditingLanguage(event) {
		this.toggleEditingLanguage()
		console.log(event.label[this.locale])
		console.log(event.text[this.locale])
		this.changeTranslationLabel(event.label)
		this.changeTranslationText(event.text)
	},	
	showPopup() {
		this.popupVisible = true;
	},
	cancelUi(){
		this.$emit('getClose')
		console.log('клик')
	},
	hideUi(){
		this.$emit('update:showUi', false)	
	},
	seeEditingRubric() {
		console.log('запуск рубрики')
		this.$emit('seeEditingRubric')
		this.$emit('update:showUi', false)	
		// this.$refs.MyInputImgDish.noShowPreviewImg();
	},
	seeEditingCategory() {
		console.log('редактирование категории')
		this.$emit('seeEditingCategory')
		this.$emit('update:showUi', false)
		// this.$refs.MyInputImgDish.noShowPreviewImg();
	},
	hidePopup() {
		this.popupVisible = false;	
		},
	
  },
  computed: {
	...mapState({
			
			translationLabel: state => state.meaning.translationLabel,
			translationText: state => state.meaning.translationText,
			visibleEditingLanguage: state => state.meaning.visibleEditingLanguage
		}),

	dishsLength(){
		let sum = 0; 
		for (let rubric of this.category.rubrics) {
			sum += rubric.dishs.length;
		}
      return sum;		
	}
	},
}
</script>

<style scoped>
.ui__wrapper-transparent{
	position: absolute;
	margin-top: -70px;
   top: 0px;
   left: 0;
   width: 100%;
   height: 100%;
	/* background-color: #eb575780; */
	z-index: 15;
}
.ui__container {
  min-height: 50px;
  padding-bottom: 55px;
}
.ui__button-orange {
  background: #F78408;
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  line-height: 145%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  margin: 30px auto;
  max-width: 232px;
}

.ui__button {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
}
.ui__button img {
  margin-right: 9px;
}
.ui__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
}
.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}
.ui__buttons {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 15px 15px 25px 15px;
  transition: all 0.3s ease 0s;
  max-width: 600px;
  margin: 0 auto;
  /* height:60px; */
}
.ui__buttons._active {
	/* height:150px; */
}
.ui__button-add svg {
  margin-right: 9px;
}
.ui__button-add span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
}

.buttons-panel__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.buttons-panel__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.buttons-panel__cancel {
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
  opacity: 0.8;
  padding: 7px 0;
}
.buttons-panel__bottom {
  display: flex;
  justify-content: space-between;
}
.buttons-panel__button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
}
.buttons-panel__editing {
  display: flex;
  align-items: flex-start;
}
.buttons-panel__сorrect {
  margin-right: 22px;
  
  
}
.buttons-panel__сorrect_tr{
	font-weight: 500;
	color: #707070;
  font-size: 16px;
}
.buttons-panel__сorrect-btn {
  display: flex;
  align-items: center;
}
.buttons-panel__сorrect-btn img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.buttons-panel__сorrect-btn span {
  color: #828282;
  font-size: 16px;
  line-height: 18px;
}

.popup__title {
	font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px;
}
.popup__text {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-bottom: 20px;
}

.popup {
  /* -webkit-overflow-scrolling: touch; */
  z-index: 100;
  padding: 30px 10px;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;

}

.popup::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
}



.popup__container{
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;

  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 100%;
  max-width: 500px;
  padding:10px 15px 15px 15px;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
	justify-content: center;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
  z-index: 150;
  position: relative;
}

.popup__body {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: #fff;
  padding: 50px;
  width: 100%;
  max-width: 800px;
}

.popup__close {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 30;
  content: 'нет';
}

.popup__buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.popup__cancel {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	color: #828282;
}
.popup__agree {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #EB5757;

}


/* animation */

.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: opacity 0.5s ease;
}

.popup-transition-enter-from,
.popup-transition-leave-to {
  opacity: 0;
}



</style>