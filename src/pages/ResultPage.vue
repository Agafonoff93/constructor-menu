<template>
	<div class="wrapper">
		
	
		<MainHeader
		class="header"
		:langList="langList"
		:langListReserve="langListReserve"
		
	
		/>
  
	<main  class="page">
		
		<ResultPreview
		
		/>

		<MyPanelUiBottom>
			<button @click="$router.push('/')" class="ui__button">
				<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.0799999 6.62C0.127594 6.49725 0.19896 6.3851 0.290001 6.29L3.29 3.29C3.4783 3.1017 3.7337 2.99591 4 2.99591C4.2663 2.99591 4.5217 3.1017 4.71 3.29C4.8983 3.4783 5.00409 3.7337 5.00409 4C5.00409 4.2663 4.8983 4.5217 4.71 4.71L3.41 6H13C13.2652 6 13.5196 5.89464 13.7071 5.70711C13.8946 5.51957 14 5.26522 14 5V1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V5C16 5.79565 15.6839 6.55871 15.1213 7.12132C14.5587 7.68393 13.7956 8 13 8H3.41L4.71 9.29C4.80373 9.38296 4.87812 9.49356 4.92889 9.61542C4.97966 9.73728 5.0058 9.86799 5.0058 10C5.0058 10.132 4.97966 10.2627 4.92889 10.3846C4.87812 10.5064 4.80373 10.617 4.71 10.71C4.61704 10.8037 4.50644 10.8781 4.38458 10.9289C4.26272 10.9797 4.13201 11.0058 4 11.0058C3.86799 11.0058 3.73728 10.9797 3.61542 10.9289C3.49356 10.8781 3.38296 10.8037 3.29 10.71L0.290001 7.71C0.19896 7.6149 0.127594 7.50275 0.0799999 7.38C-0.0200176 7.13654 -0.0200176 6.86346 0.0799999 6.62Z" fill="#828282"/>
				</svg>
				<span class="ui__button-span">
					Вернуться в начало
				</span>
			</button>
			

		</MyPanelUiBottom>
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
import ResultPreview from '@/components/ResultPreview.vue'
import MyPanelUiBottom from  '@/components/UI/MyPanelUiBottom.vue'

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	components: {
		MyPanelUiBottom,
		MainHeader,
		ResultPreview,
	},
	methods: {
	
	...mapActions({
		fetchUser: 'user/fetchUser',
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
		
		this.fetchUser()
	  }
}
</script>

<style scoped>
button::-moz-focus-inner,:focus-visible {
  padding: 0;
  border: 0;
}


.ui__button {
	display:flex;
	align-items:center;
}
.ui__button-span {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #828282;
	margin-left: 10px;
   -moz-user-select: -moz-none;
	-o-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}
</style>