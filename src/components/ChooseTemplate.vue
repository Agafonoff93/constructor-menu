<template>
	 <div class="page__templates templates">
		<div class="templates__container _container">
			<div class="templates__body">
				<div 
				v-for="theme in themes"
				:key="theme.value"
				class="templates__item item-template">
				<Popover v-slot="{ open }" class="relative">
					<div :class="{ '_open': open }" class="item-template__wrapper">
					<PopoverButton style="padding:9px;border-radius: 5px;">
					<div class="item-template__slider">	
						<MySlider 
						:images="theme"
						/></div>
					<div :class="{ '_open': open }" class="item-template__title _title">{{ theme.label }}</div>
					<div class="item-template__text _text"> {{ theme.text }}</div>
						
					
					</PopoverButton>
					<transition
					name="ui"
					>
						<PopoverPanel v-slot="{ close }" class="ui__fixed-wrapper-choose">
							<MyPanelUiChooseItem
							:theme="theme"
							@closeUi="closeUi(close)"
							/>
						</PopoverPanel>
					</transition>
					</div>
				</Popover>
				</div>
			</div>
		</div>
		<MyPanelUiBottom>
									
				<span class="ui__button-choose-span">Выберите шаблон</span> <button class="ui__button-choose-button" @click="$router.back()">Назад</button>
			
		</MyPanelUiBottom>
		
	
	</div>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>


<script>

import MyPanelUiBottom from  '@/components/UI/MyPanelUiBottom.vue'
import MyPanelUiChooseItem from  '@/components/UI/MyPanelUiChooseItem.vue'
import MySlider from '@/components/UI/MySlider.vue'
export default {
	props: {
		// draggableDish: {
		// 	type: Boolean,
		// },
		themes:{
			type: Array,
			required: true,
		},
	},
	
	// emits: ['removedish','longtapHandlerDish','touchHandlerDish'],
	data(){
		return {
			isFocus: false,
			uiVisible:false,
			toggleShow: false,
		}
	},
	methods: {
		closeUi(close){
			console.log('закрываем')
			close()
		}
	
	},
	components: {
		MySlider,
		MyPanelUiBottom,
		MyPanelUiChooseItem,
	},

}
</script>

<style scoped>

button::-moz-focus-inner,:focus-visible {
  padding: 0;
  border: 0;
}

.ui__button-choose-svg {
  margin-right: 9px;
}
.ui__button-choose-span {
	font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #828282;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}

.ui__button-choose-button {
	font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #333333;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}
.ui__animate{
	transition: all 0.3s ease 0s;
  
}
.ui__animate-to{
	transform: translate(0px,100%);
	opacity: 1;
}
.ui__animate-from{
	transform: translate(0px,0%);
   opacity: 0;
}
.ui-enter-active,
.ui-leave-active {
  transition: all .3s ease;
}

.ui-enter-from,.ui-leave-to {
	transform: translate(0px,100%);
}

.ui__fixed-wrapper-choose {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}

.page__templates {
}
.templates {
}
.templates__container {
}

.templates__body {

}
.templates__item {
	
}

.item-template__wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	border: 1px solid transparent;
	background: #FFFFFF;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
	border-radius: 5px;
	margin-bottom: 15px;
	transition: all 0.3s ease 0s;
}
.item-template__wrapper._open {
	border: 1px solid #F78408;
}
button.item-template__button {
	padding: 9px;
}
.item-template__slider {
	width: 100%;
	margin: 0 0 10px 0;
}
.item-template__title {
	font-size: 16px;
	text-align: left;
	transition: color 0.3s ease 0s;
}
.item-template__title._open {
	color: #F78408;
}
.item-template__text {
	text-align: left;
}


</style>
