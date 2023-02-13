<template>
	<component
	:about="about"
	:categories="categories"
	:langList="langList"
	:themes="themes"
	:is="$route.params.name"
	></component>
<MyPanelUiAgree
@changeUrl="changeUrl"
/>
</template>

<script>
import ThemeStockholm from '@/templates/ThemeStockholm'
import ThemeHumburg from '@/templates/ThemeHumburg'
import ThemeBucharest from '@/templates/ThemeBucharest'
import MyPanelUiAgree from  '@/components/UI/MyPanelUiAgree.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'PreviewTemplate',
  props: {
	name: {
		type: [Number,String],
	},
	
  },

  components: {
	ThemeStockholm,
	ThemeHumburg,
	ThemeBucharest,
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
		this.comingUrl = this.currentUrl.replace('choose/Theme','')
		console.log(this.comingUrl)
		this.addUrl(this.comingUrl)
	}
  },
  computed: {
	 ...mapState({
		isUserLoading: state => state.user.isUserLoading,
		about: state => state.user.about,
		categories: state => state.user.categories,	
		langList: state => state.user.langList,
      langListReserve: state => state.user.langListReserve, 
		themes: state => state.templates.themes,
		templateUrl: state => state.user.templateUrl,
	}),
	...mapGetters({

	})
  },
  mounted() {
	this.currentUrl = window.location.href;
   console.log(this.currentUrl); 
	console.log(this.$route.fullPath)
}

}

</script>

<style scoped>



</style>