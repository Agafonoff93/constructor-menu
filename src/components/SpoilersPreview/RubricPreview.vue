<template>
		<div  class="main-preview-rubrics__block" >						
							<div  @click="getFocus" ref="target" data-spoller class="main-preview-rubrics__header" :class="{_focus: isFocus}">
								<div class="main-preview-rubrics__label _label">Рубрики</div>
								<div class="main-preview-rubrics__title _title">{{rubric.label}}</div>
								<div class="main-preview-rubrics__text _text">{{rubric.text}}</div>
											<div  v-if="this.rubric.img.length != 0" class="main-preview-rubrics__image _ibg">
												<img v-bind:src="(`${rubric.img}`)" alt="">
											</div>
									
		
							</div>
							<DishPreview 
							v-for="dish in rubric.dishs"
							:key="dish.value"
							:dish="dish"
							@removedish="$emit('removedish', $event)"
							/>
							
							<!-- ui panel  -->
							<MyPenelUiRubric 
							v-if="isFocus"  
							:rubric="rubric"
							@removerubric="$emit('removerubric', rubric)"/>
                     <!-- ui panel  -->  

						</div>	
					
</template>

<script>
import MyPenelUiRubric from  '@/components/UI/MyPenelUiRubric.vue'
import DishPreview from  '@/components/SpoilersPreview/DishPreview.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
	props: {
		rubric:{
			type: Object,
			required: true,
		},
	
	},
	setup() {
    const target = ref(null)

   //  onClickOutside(target, (event) => console.log(event))

    return { target }
  },
	// emits: ['removerubric, removedish'],
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
		DishPreview,
		MyPenelUiRubric,
	},

}
</script>

<style>

</style>