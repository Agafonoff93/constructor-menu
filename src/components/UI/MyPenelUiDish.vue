<template>
	<transition  name="popup-transition">
	<div 
	v-if="showUi"
	@click.stop="hideUi" 
	class="ui__wrapper-transparent">
	<div @click.stop class="ui__container _container">	
		<div class="ui__fixed-wrapper">
			<div class="ui__buttons">				
				<div  class="ui__buttons-panel buttons-panel">
					<div class="buttons-panel__top">
						<div class="buttons-panel__title">Параметры блюда</div>
						<button 
						@click="hideUi" 
						class="buttons-panel__cancel"
						>
						Отменить</button>
					</div>
					<div class="buttons-panel__bottom">
					
						<div class="buttons-panel__editing">
						
							<button @click="seeEditingDish"  class="buttons-panel__сorrect">
								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5.23999C20.0008 5.10838 19.9756 4.97792 19.9258 4.85608C19.876 4.73424 19.8027 4.62343 19.71 4.52999L15.47 0.289986C15.3766 0.197305 15.2658 0.12398 15.1439 0.074215C15.0221 0.0244504 14.8916 -0.000774696 14.76 -1.38033e-05C14.6284 -0.000774696 14.4979 0.0244504 14.3761 0.074215C14.2543 0.12398 14.1435 0.197305 14.05 0.289986L11.22 3.11999L0.290017 14.05C0.197335 14.1434 0.12401 14.2542 0.0742455 14.3761C0.0244809 14.4979 -0.000744179 14.6284 1.67143e-05 14.76V19C1.67143e-05 19.2652 0.105374 19.5196 0.29291 19.7071C0.480446 19.8946 0.7348 20 1.00002 20H5.24002C5.37994 20.0076 5.51991 19.9857 5.65084 19.9358C5.78176 19.8858 5.90073 19.8089 6.00002 19.71L16.87 8.77999L19.71 5.99999C19.8013 5.90307 19.8757 5.79152 19.93 5.66999C19.9397 5.59028 19.9397 5.5097 19.93 5.42999C19.9347 5.38344 19.9347 5.33654 19.93 5.28999L20 5.23999ZM4.83002 18H2.00002V15.17L11.93 5.23999L14.76 8.06999L4.83002 18ZM16.17 6.65999L13.34 3.82999L14.76 2.41999L17.58 5.23999L16.17 6.65999Z" fill="#828282"/>
								</svg>
								<span>Редактировать блюдо</span> 
							</button>
							<button @click="seeEditingLanguage(dish)" class="buttons-panel__сorrect buttons-panel__сorrect_tr">
								[Tr]
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
		   
			@removedish="$emit('removedish', dish)"
			v-model:show="popupVisible">
			<div class="popup__title">
					Удаление рубрики
				</div>
				<div class="popup__text">
					Вы уверены, что хотите удалить блюдо  <span class="_bold-light">“{{ dish.label.ru}}” </span>из рубрики “{{ rubric.label.ru }}”,"{{category.label.ru}}"? 
				</div>
				<div class="popup__buttons">
					<button 
					class="popup__cancel"
					@click="hidePopup"
					>
						Отменить
					</button>
					<button 
					@click="$emit('removedish', dish)" 
				
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
  props:{
	dish:{
			type: Object,
			required: true,
		},
	rubric:{
			type: Object,
			required: true,
		},
	category:{
			type: Object,
			required: true,
		},
	isFocus: {
	type: [Boolean,Object, null]
	},
	showUi: {
		type:Boolean,
		default:false
	},
  },
	
	data() {
	return {
		
		popupVisible: false,
	}
  },


  emits: ['removedish','seeEditingDish'],
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
	seeEditingDish() {
		console.log('редактирование блюда')
		this.$emit('seeEditingDish')
		this.$emit('update:showUi', false)	
	},
	hidePopup() {
		this.popupVisible = false;	
		},
  },
}
</script>

<style scoped>

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
  max-width: 600px;
  margin: 0 auto;
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
  justify-content: space-between;
  width: 100%;
}
.buttons-panel__сorrect {
  margin-right: 22px;
  display:flex;
}
.buttons-panel__сorrect_tr{
	font-weight: 500;
	color: #707070;
  font-size: 16px;
}
.buttons-panel__сorrect svg {
  margin-right: 9px;
}
.buttons-panel__сorrect-btn {
  display: flex;
  align-items: center;
}
.buttons-panel__сorrect-btn svg {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.buttons-panel__сorrect-btn span {
  color: #828282;
  font-size: 16px;
  line-height: 18px;
}
.buttons-panel__сorrect span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
}


.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: opacity 0.5s ease;
}

.popup-transition-enter-from,
.popup-transition-leave-to {
  opacity: 0;
}
</style>