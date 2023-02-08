<template>
	<component :is="$route.params.name"></component>
<MyPanelUiAgree
@changeUrl="changeUrl"
/>
</template>

<script>
import StockholmTheme from '@/templates/StockholmTheme'
import HumburgTheme from '@/templates/HumburgTheme'
import BucharestTheme from '@/templates/BucharestTheme'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

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
		currentUrl:'',
		commingUrl:'',
	}
  },

  methods: {
	...mapActions({
		fetchUser: 'user/fetchUser',
		addUrl:'user/addUrl'
	}),
	changeUrl() {
		this.currentUrl
		console.log(this.currentUrl)
		this.comingUrl = this.currentUrl.replace('choose','menu')
		console.log(this.comingUrl)
		this.addUrl(this.comingUrl)
	}
  },
  computed: {
	...mapState({
		templateUrl: state => state.user.templateUrl,
	
	}),
	...mapGetters({

	})
  },
  mounted() {
	this.currentUrl = window.location.href;
   console.log(this.currentUrl); // => https://ru.hexlet.io/qna
	console.log(this.$route.fullPath)
}

}

</script>

<style scoped>



</style>