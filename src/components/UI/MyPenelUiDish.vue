<template>
	<div ref="target" class="ui__container _container">	
		<div class="ui__fixed-wrapper">
			<div class="ui__buttons">				
				<div  class="ui__buttons-panel buttons-panel">
					<div class="buttons-panel__top">
						<div class="buttons-panel__title">Параметры блюда</div>
						<button class="buttons-panel__cancel">Отменить</button>
					</div>
					<div class="buttons-panel__bottom">
					
						<div class="buttons-panel__editing">
							<button @click="$emit('removerubric', event)"  class="buttons-panel__сorrect">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.3333 5.03334C17.3339 4.92367 17.3129 4.81495 17.2715 4.71342C17.23 4.61188 17.1689 4.51954 17.0916 4.44167L13.5583 0.908337C13.4804 0.831103 13.3881 0.769998 13.2866 0.728528C13.185 0.687057 13.0763 0.666036 12.9666 0.66667C12.857 0.666036 12.7482 0.687057 12.6467 0.728528C12.5452 0.769998 12.4528 0.831103 12.375 0.908337L10.0166 3.26667L0.908307 12.375C0.831072 12.4529 0.769968 12.5452 0.728497 12.6467C0.687027 12.7483 0.666006 12.857 0.66664 12.9667V16.5C0.66664 16.721 0.754437 16.933 0.910718 17.0893C1.067 17.2455 1.27896 17.3333 1.49997 17.3333H5.03331C5.14991 17.3397 5.26655 17.3214 5.37566 17.2798C5.48476 17.2382 5.5839 17.1741 5.66664 17.0917L14.725 7.98334L17.0916 5.66667C17.1677 5.5859 17.2297 5.49295 17.275 5.39167C17.283 5.32525 17.283 5.2581 17.275 5.19167C17.2789 5.15288 17.2789 5.1138 17.275 5.075L17.3333 5.03334ZM4.69164 15.6667H2.33331V13.3083L10.6083 5.03334L12.9666 7.39167L4.69164 15.6667ZM14.1416 6.21667L11.7833 3.85834L12.9666 2.68334L15.3166 5.03334L14.1416 6.21667Z" fill="#828282"/>
								</svg>
								<span>Редактировать блюдо</span> 
							</button>
							<button @click="showPopup"  class="buttons-panel__delete">
								<img src="@/assets/icons/btn-del.svg" alt="delete">
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<transition name="popup-transition">
		<my-popup 
		   
			@removedish="$emit('removedish', dish)"
			v-model:show="popupVisible">
	 </my-popup>
	</transition>
	
</template>

<script>

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  props:{
	dish:{
			type: Object,
			required: true,
		},
  },
	
	data() {
	return {
		
		popupVisible: false,
	}
  },
  setup() {
    const target = ref(null)

    onClickOutside(target, (event) => console.log(event))

    return { target }
  },

  emits: ['removedish'],
	methods: {
	
	showPopup() {
		this.popupVisible = true;
	},
  },
}
</script>

<style scoped>

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
  /* position: fixed; */
  position:relative;
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
}
.ui__button-add img {
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
  align-items: center;
}
.buttons-panel__сorrect {
  margin-right: 22px;
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



.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: opacity 0.5s ease;
}

.popup-transition-enter-from,
.popup-transition-leave-to {
  opacity: 0;
}
</style>