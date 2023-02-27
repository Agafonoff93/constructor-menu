<template>
	<div class="wrapper">
		
	
		<MainHeader
		class="header"
		:langList="langList"
		:langListReserve="langListReserve"
		
	
		/>
  
	<main  class="page">
		
		<ChooseTemplate 
		:themes="themes"/>

		
	</main>
	<footer class="footer">
	<div class="footer__container _container">
	
		
	<div class="footer__stick-wrapper">
		
	</div>
	</div>
	</footer>
	
	</div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import ChooseTemplate from '@/components/ChooseTemplate.vue'


import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	components: {
		ChooseTemplate,
		MainHeader,
		
	},
	methods: {
	
	...mapActions({
		fetchAbout: 'user/fetchAbout',
		testUser:'user/testUser'
	}),
},
computed: {
	...mapState({
	
		langList: state => state.user.langList,
      langListReserve: state => state.user.langListReserve, 
		themes: state => state.templates.themes
	}),
	...mapGetters({

	})
  },
  mounted() {
		
		this.fetchAbout()
	  }
}
</script>

<style scoped>
button::-moz-focus-inner,:focus-visible {
  padding: 0;
  border: 0;
}

</style>