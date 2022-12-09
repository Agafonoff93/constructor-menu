<template>
	<div ref="target" class="ui__container _container">	
		<div class="ui__fixed-wrapper">
			<div class="ui__buttons">				
				<div  class="ui__buttons-panel buttons-panel">
					<div class="buttons-panel__top">
						<div class="buttons-panel__title">Параметры категории </div>
						<button class="buttons-panel__cancel">Отменить</button>
					</div>
					<div class="buttons-panel__bottom">
						<button class="ui__button-add">
							<img src="@/assets/icons/add-icon.svg" alt="add-icon">
							<span>Добавить рубрику</span>
						</button>
						<div class="buttons-panel__editing">
							<button @click="$emit('removerubric', event)"  class="buttons-panel__сorrect">
								<img src="@/assets/icons/btn-crct.svg" alt="correct">
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
		   
			@removerubric="$emit('removerubric', rubric)"
			v-model:show="popupVisible">
	 </my-popup>
	</transition>
	
</template>

<script>

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  props:{
	rubric:{
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

  emits: ['removerubric'],
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