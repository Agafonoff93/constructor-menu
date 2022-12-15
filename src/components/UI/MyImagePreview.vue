<template>
	<div class="file__item-preview">
					<div class="file__item-preview-remove"></div>
					<img src="" alt="" />
	</div>
</template>

<script>
export default {
	
	name: 'my-image-preview',
	props: {
		valueimage: [String, Number, Object, null],
		
	},

	
	data() {
      return {
      
      };
    },
	//  emits: 
	//         ['input', 'update:valueimage','removeabout','removeImg:priew']
	// 		,
	methods: {

	},



}
</script>