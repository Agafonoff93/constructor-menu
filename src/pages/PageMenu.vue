<template>
	<component :is="$route.params.name"></component>

</template>

<script>
import StockholmTheme from '@/templates/StockholmTheme'
import HumburgTheme from '@/templates/HumburgTheme'
import BucharestTheme from '@/templates/BucharestTheme'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
export default {
  name: 'PageMenu',
  props: {

	
  },

  components: {
	StockholmTheme,
	HumburgTheme,
	BucharestTheme,
	MyPanelUiAgree

	
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
  mounted() {

}

}

</script>

<style scoped>



</style>