<template>
	<div  class="main-preview-categories__wrapper">
		<div  class="main-preview-categories__block">
					<div @click="getFocus" ref="target"  class="main-preview-categories__header"  :class="{_focus: isFocus}">
						<div class="main-preview-categories__label _label">Категория</div>
						<div class="main-preview-categories__title _title">{{ category.label }}</div>
						<div class="main-preview-categories__text _text">{{ category.text }}</div>
					</div>
					
					<RubricPreview 
					v-for="rubric in category.rubrics"
					:key="rubric.value"
					:rubric="rubric"
					@removerubric="$emit('removerubric', $event, category)"
					@removedish="$emit('removedish', $event)"
					/>
					<div style="display:none" class="main-preview-categories__body">
					
					</div>
				</div>

<!-- ui panel  -->
            <MyPenelUiCategory 
				v-if="isFocus"  
				@remove="$emit('remove', category)"
				/>
<!-- ui panel  -->
				

	</div>
				

</template>

<script>

import MyPenelUiCategory from  '@/components/UI/MyPenelUiCategory.vue'
import RubricPreview from  '@/components/SpoilersPreview/RubricPreview.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
	props: {
		category: {
			type: Object,
			required: true,
		},
	
	
	
	
	
	},
	setup() {
    const target = ref(null)

   //  onClickOutside(target, (event) => console.log(event))

    return { target }
  },
	// emits: ['remove','removerubric','removedish'],
	data(){
		return {
			isFocus: false
		}
	},
	methods: {
		getFocus(){
			this.isFocus = true
			
		},
		
		
	},
	components: {
		MyPenelUiCategory,
		RubricPreview,
	},

  
}






</script>

<style>
 
</style>