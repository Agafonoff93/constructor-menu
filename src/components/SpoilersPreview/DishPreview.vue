<template>
<div  class="main-preview-rubrics__body">
	<div  class="main-preview-dishs__block">
		<div data-spoller class="main-preview-dishs__header">
			<div class="main-preview-dishs__label _label">Блюдо</div>
			<div class="main-preview-dishs__info-main">
				<div class="main-preview-dishs__title _title">{{dish.title}}</div>
				<div class="main-preview-dishs__price _title _rub">350</div>
			</div>										
		</div>
		<div class="main-preview-dishs__description">
			<div class="main-preview-dishs__text _text">{{dish.text}}</div>
			<div class="main-preview-dishs__weight _label">450 г</div>
			<div class="main-preview-dishs__image _ibg">
			  <!-- <img src="../assets/foto-items/item-7.png" alt="item"> -->
			</div>
		</div>
		<div class="main-preview-dishs__button-more _label">
			<span >Свернуть описание</span>
			<span style="display: none;">Подробное описание</span>
		</div>
	</div>

</div>
</template>


<script>
import MyPenelUiCategory from  '@/components/UI/MyPenelUiCategory.vue'

export default {
	props: {
		dish:{
			type: Object,
			required: true,
		},
	
		
	},
	data() {
		 return {

		 }
	},
	components: {
		
		MyPenelUiCategory,
	}
}
</script>

<style>

</style>