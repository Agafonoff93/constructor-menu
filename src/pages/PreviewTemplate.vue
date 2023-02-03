<template>
<StockholmTheme

/>
<MyPanelUiAgree
/>
</template>



<script>
import StockholmTheme from '@/templates/StockholmTheme'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
export default {
  name: 'App',

  components: {
	StockholmTheme,
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