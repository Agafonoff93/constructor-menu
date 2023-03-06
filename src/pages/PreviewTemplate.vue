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
import ThemeBologna from '@/templates/ThemeBologna'
import ThemeIstanbul from '@/templates/ThemeIstanbul'
import ThemeCopenhagen from '@/templates/ThemeCopenhagen'
import ThemeTallinn from '@/templates/ThemeTallinn'
import ThemeLasVegas from '@/templates/ThemeLasVegas'
import ThemeBeijing from '@/templates/ThemeBeijing'
import ThemeTehran from '@/templates/ThemeTehran'
import ThemeRome from '@/templates/ThemeRome'
import ThemeBahamas from '@/templates/ThemeBahamas'
import ThemeBucharest from '@/templates/ThemeBucharest'
import ThemeDubai from '@/templates/ThemeDubai'
import ThemeAthens from '@/templates/ThemeAthens'
import ThemeBoston from '@/templates/ThemeBoston'
import ThemeKioto from '@/templates/ThemeKioto'
import ThemeOslo from '@/templates/ThemeOslo'
import ThemeLapland from '@/templates/ThemeLapland'
import ThemeCairo from '@/templates/ThemeCairo'
import ThemeVenice from '@/templates/ThemeVenice'
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
	ThemeIstanbul,
	ThemeBologna,
	ThemeCopenhagen,
	ThemeTallinn,
	ThemeLasVegas,
	ThemeBeijing,
	ThemeBahamas,
	ThemeTehran,
	ThemeBucharest,
	ThemeRome,
	ThemeDubai,
	ThemeAthens,
	ThemeBoston,
	ThemeKioto,
	ThemeOslo,
	ThemeLapland,
	ThemeCairo,
	ThemeHumburg,
	ThemeVenice,

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
		fetchAbout: 'user/fetchAbout',
		setLinkTemplate:'user/setLinkTemplate',
		addUrl:'user/addUrl'
	}),
	changeUrl() {
		this.currentUrl
	
		this.comingUrl = this.currentUrl.replace('choose/Theme','')
		console.log(this.comingUrl)
		this.addUrl(this.comingUrl)
	}
  },
  computed: {
	 ...mapState({
		isUserLoading: state => state.user.isUserLoading,
		about: state => state.user.about,
		user: state=> state.user.user,
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
	this.setLinkTemplate(this.currentUrl)
}

}

</script>

<style scoped>



</style>