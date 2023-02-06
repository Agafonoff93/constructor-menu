<template>
	<component :is="$route.params.name"></component>
<MyPanelUiAgree
/>
</template>

<script>
import StockholmTheme from '@/templates/StockholmTheme'
import HumburgTheme from '@/templates/HumburgTheme'
import BucharestTheme from '@/templates/BucharestTheme'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
export default {
  name: 'PreviewTemplate',
  props: {
	// componentId: {
	// 	type: [Number,String],
	// 	required: true
	// },
	
  },

  components: {
	StockholmTheme,
	HumburgTheme,
	BucharestTheme,
	MyPanelUiAgree

	// MyPenelUi
  },
  data() {
	return {
		unLock: false,
		
	}
  },

  methods: {
	
	
  },
  computed: {
	
  },


}

</script>

<style scoped>



</style>