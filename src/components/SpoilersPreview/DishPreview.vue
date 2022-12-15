<template>
<div  class="main-preview-rubrics__body">
	<div  @click="getFocus" ref="target" class="main-preview-dishs__block"  :class="{_focus: isFocus}">
		<div data-spoller class="main-preview-dishs__header">
			<div class="main-preview-dishs__label _label">Блюдо</div>
			<div class="main-preview-dishs__info-main">
				<div class="main-preview-dishs__title _title">{{ dish.label }}</div>
				<div class="main-preview-dishs__price _title _rub">{{ dish.price }}</div>
			</div>										
		</div>
		<div class="main-preview-dishs__description">
			<div class="main-preview-dishs__text _text">{{ dish.text }}</div>
			<div class="main-preview-dishs__weight _label">{{ dish.weight }}</div>	
			<div  v-if="this.dish.img.length != 0" class="main-preview-dishs__image _ibg">
											<img v-bind:src="(`${dish.img}`)" alt="">
			</div>
			<div  class="main-preview-dishs__slider-wrapper">
				<MySlider 
				:dish="dish"
				/>
			</div>		
		</div>
		<div class="main-preview-dishs__button-more _label">
			<span >Свернуть описание</span>
			<span style="display: none;">Подробное описание</span>
		</div>
	</div>
		<!-- ui panel  -->
							<MyPenelUiDish
							v-if="isFocus"  
							:dish="dish"
							@removedish="$emit('removedish', dish)"/>
                     <!-- ui panel  -->  

</div>
</template>


<script>
import MyPenelUiDish from  '@/components/UI/MyPenelUiDish.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import MySlider from '@/components/UI/MySlider.vue'
export default {
	props: {
		dish:{
			type: Object,
			required: true,
		},
	},
	setup() {
    const target = ref(null)

   //  onClickOutside(target, (event) => console.log(event))

    return { target }
  },
	emits: ['removedish'],
	data(){
		return {
			isFocus: false,
		}
	},
	methods: {
		getFocus(){
			// console.log(this.rubric)
			
			this.isFocus = true
		},
	},
	components: {
		MySlider,
		MyPenelUiDish,
	}
}
</script>

<style>

</style>