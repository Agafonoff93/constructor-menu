<template>
	<component :is="$route.params.name"></component>

</template>

<script>
import ThemeStockholm from '@/templates/ThemeStockholm'
import ThemeHumburg from '@/templates/ThemeHumburg'
import ThemeBucharest from '@/templates/ThemeBucharest'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
export default {
  name: 'PageMenu',
  props: {

	
  },

  components: {
	ThemeStockholm,
	ThemeHumburg,
	ThemeBucharest,
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