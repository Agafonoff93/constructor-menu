<template>
	<ThemeCairo
	:about="about"
	:categories="categories"
	:langList="langList"
	:themes="themes"
	/> 
	<div class="subscribe">
			<div class="subscribe__container">
				<div class="subscribe__box-btns">
					 
					<button @click="showPopup" href="#subscription" class="subscribe__button _button-subscription _popup-link">Получи месяц бесплатного
						использования после оценки</button>
				</div>
			</div>
		</div>
   <div :class="{'_active': openPopup}" class="popup popup_subscription">
			<div class="popup__content">
				<div class="popup__body _container">
					<button 
					@click="hidePopup"
					class="popup__close">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							width="18" height="18" viewBox="0 0 18 18">
							<defs>
								<path id="avzva"
									d="M691.485 160.07l-1.414 1.415-7.071-7.071-7.071 7.071-1.414-1.414 7.07-7.071-7.07-7.071 1.414-1.415 7.07 7.071 7.072-7.07 1.414 1.414-7.07 7.07z" />
							</defs>
							<g>
								<g transform="translate(-674 -144)">
									<use fill="#212121" xlink:href="#avzva" />
								</g>
							</g>
						</svg> 
					</button>
					<button href="#subscription" class="popup__button  _button-subscription">Подписка на новости</button>
					<button href="#subscription" class="popup__button  _button-subscription">Получи месяц бесплатного использования после
					оценки</button>
				</div>
			</div>
		</div>
</template>

<script>

import ThemeCairo from '@/templates/ThemeCairo'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'PageMenuCairoTheme',
  props: {

	
  },

  components: {
	ThemeCairo,
  },
  data() {
	return {
		openPopup: false,
		
	}
  },

  methods: {
	...mapActions({
		fetchAbout: 'user/fetchAbout',
		addUrl:'user/addUrl'
	}),
	showPopup(){
		this.openPopup = true
	},
	hidePopup() {
		this.openPopup = false
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
	this.fetchAbout()

  }


}


</script>

<style scoped>

.popup {
	-webkit-overflow-scrolling: touch;
	z-index: 100;
	padding: 0px;
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease 0s;
	transform: translate(-100%, 0px);
}




.popup._active {
	overflow: auto;
	visibility: visible;
	transform: translate(0%, 0px);
}

.popup._active::before {
	/* opacity: 1; */
}

.popup._active .popup__body {
	-webkit-transition: all 0.3s ease 0.2s;
	-o-transition: all 0.3s ease 0.2s;
	transition: all 0.3s ease 0.2s;
	/* -webkit-transform: scale(1);
		 -ms-transform: scale(1);
			  transform: scale(1); */
}

.popup__content {

	min-height: 100%;
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;

}

.popup__body {
	/* -webkit-transform: scale(0);
		 -ms-transform: scale(0);
			  transform: scale(0); */
	position: relative;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	background:  url(@/assets/bg-templates/bg-template-19.jpeg);
	padding: 0px;
	width: 100%;
	max-width: 800px;
	height: 100%;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	align-items: center;
	padding: 15px;
}

.popup__close {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
	z-index: 30;
	
}
.popup__close svg use {
	fill:#212121;
}

.popup__button {
	max-width: 450px;
}



	.subscribe {
		min-height: 70px
	}
	.subscribe__container {
		width: 100%;
		background:  url(@/assets/bg-templates/bg-template-19.jpeg);
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%,0px);
		max-width: 550px;
		margin: 0 auto;
		padding: 0 10px;
	}

	._button-subscription {
		background: #121212;
		font-weight: 400;
		font-size: 14px;
		line-height: 122%;
		text-align: center;
		text-transform: uppercase;
		color: #ffffff;
		width: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 10px;
		transition: background-color 0.3s ease 0s;
		margin-bottom: 10px;
		font-family: 'Rubik Mono One';;
	}


	._button-subscription:first-child {
		margin: 15px 0;
	}
</style>