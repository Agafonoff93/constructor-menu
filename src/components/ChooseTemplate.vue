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
					<PopoverButton>
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
		<!-- <MyPanelUiChoose
		
		/> -->
	</div>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>


<script>

import MyPanelUiChoose from  '@/components/UI/MyPanelUiChoose.vue'
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
	// 	showUi(){
	// 		this.uiVisible = true
	// 		console.log('click show')
	// 	},
	// 	getFocus(){
	// 		// console.log(this.rubric)
	// 		this.isFocus = true
	// 	},
	// 	toggleBlock(){
	// 	if(this.toggleShow == true){
	// 		this.toggleShow = false
	// 	}else{
	// 		this.toggleShow = true
	// 	}
	//   },
	//   longtapHandler(mouseEvent){
	// 		this.$emit('longtapHandlerDish')
	// 	},
	// 	touchHandler(){
	// 		this.$emit('touchHandlerDish')
	// 	}
	},
	components: {
		MySlider,
		MyPanelUiChoose,
		MyPanelUiChooseItem,
	},

}
</script>

<style scoped>

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
	padding: 9px;
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
