<template>
		<div class="main-preview-rubrics__block">						
							<div data-spoller class="main-preview-rubrics__header">
								<div class="main-preview-rubrics__label _label">Рубрики</div>
								<div class="main-preview-rubrics__title _title">{{rubric.title}}</div>
								<div class="main-preview-rubrics__text _text">Летние и горячие салаты из солнечной
												Италии.</div>
											<div class="main-preview-rubrics__image _ibg">
												<img src="" alt="">
											</div>
		
							</div>
							<DishPreview 
							v-for="dish in rubric.dishs"
							:key="dish.id"
							:dish="dish"
							/>
							
						</div>	
</template>

<script>
import MyPenelUiCategory from  '@/components/UI/MyPenelUiCategory.vue'
import DishPreview from  '@/components/SpoilersPreview/DishPreview.vue'
export default {
	props: {
		rubric:{
			type: Object,
			required: true,
		},
	
	
		
	},
	data() {
		 return {

		 }
	},
	components: {
		DishPreview,
		MyPenelUiCategory,
	}
}
</script>

<style>

</style>