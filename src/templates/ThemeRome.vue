<template>
	<div  class="wrapper">
		<header class="header"> 
			<div class="header__container _container">
				<div class="header__top">
					<div v-if="about.img != ''" class="header__logo">
						<img v-bind:src="(`${about.img}`)" alt="logo">
					</div>
					<Menu v-slot="{ open }">
					<MenuButton  :class="{'_active': open }" ref="menuWatch" class="icon-menu">
						<span></span>
						<span></span>
						<span></span>
					</MenuButton>
					<transition name="menu">
					<MenuItems  class="menu__container">
						<div class="menu__body">
				
							<div v-if="about.img != ''" class="menu__header-logo">
								<div class="menu__header-wrapper">
									<img v-bind:src="(`${about.img}`)" alt="logo">
								</div>
							</div>
							<div class="select-lang__wrapper select">
									<Listbox v-slot="{ open }"  v-model="selectedLang">
										<div  class="select__title"><ListboxButton class="select__item">
											<div :class="{'_active': open }" class="select__value _icon-arrow-down">
												<span v-if="selectedLang"><img v-bind:src="(`${ selectedLang.img}`)" alt="lang-icon">{{ selectedLang.name }}</span>
										   	<span  v-else>RU</span>
											</div>
											
										</ListboxButton></div>
										<transition
										name="ui"
										>
									
										<ListboxOptions  class="select__options">
											<ListboxOption
												v-for="lang in langList"
												:key="lang.id"
												:value="lang"
												v-slot="{ selected }"
												class="select__option"		
												
											>
												<div class="select__option-wrapper" :class=" {'_hidden': selected}">
													<img v-bind:src="(`${lang.img}`)" alt="lang-icon">
													<span
													:class=" {'_hidden': selected}"
														>{{ lang.name }}</span
													>
												</div>	
											</ListboxOption>
										</ListboxOptions>
										</transition>
										
									</Listbox>
								</div>	
						<Disclosure 
						as="div"
						v-slot="{ open }"
						v-for="category in categories"
						:key="category.value"
						class="menu__item">
									<DisclosureButton as="button" :class="{'_active': open }" class="menu__link category__title _icon-arrow-down" 
										type="button">{{ category.label[locale]}}</DisclosureButton>
										<transition name="menu-item">
									<DisclosurePanel as="ul" class="menu__sub-list">
										<MenuItem  as="li"
										v-for="rubric in category.rubrics"
										:key="rubric.value"
										class="menu__sub-item"
										v-slot="{ close }"
										>
											<a
										
											:href="(`#rubric_${category.value}`+`${rubric.value}`)"
											class="menu__sub-link rup__title "
											@click="close"
											>{{ rubric.label[locale] }}</a>
										</MenuItem>
										

									</DisclosurePanel>
									</transition>
						</Disclosure>
						</div>
					
					
					</MenuItems>
				</transition>
				</Menu>
			
			
				</div>
				<div class="header__bottom">
					<div class="header__title">{{about.title[locale]}}</div>
					<div class="header__text">{{about.text[locale]}}</div>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container _container">
				<div class="page__title">Меню</div>
				<div 
				class="page__category category"
				v-for="category in categories"
				:key="category.value"
				>
					<div class="category__header-block">
						<div  class="category__title">{{ category.label[locale] }}</div>
						<div class="category__text">{{ category.text[locale] }}</div>
					</div>
					<div 
					class="category__body rup"
					v-for="rubric in category.rubrics"
					:key="rubric.value"
					>
						<div :id="(`rubric_${category.value}`+`${rubric.value}`)" class="rup__header-block">
							<div  class="rup__title rup__title_cold-snacks">{{ rubric.label[locale] }}</div>
							<div class="rup__text">{{ rubric.text[locale] }}</div>
							<div 
							v-if="rubric.img.length != 0"
							class="rup__image _ibg">
								<img v-bind:src="(`${ rubric.img }`)" alt="image">
							</div>
						</div>
						<div class="rup__body">
							<div 
							class="rup__item item"
							v-for="dish in rubric.dishs"
							:key="dish.value"
							>
								<div class="item__title">{{ dish.label[locale] }}</div>
								<div class="item__text">{{ dish.text[locale] }}</div>
								<div class="item__info">
									<div class="item__price">{{ dish.price }}</div>
									<div class="item__weight">{{ dish.weight }}</div>
								</div>

								<div 
								v-if="dish.sliderImage.length != 0"
								class="item__box-slider box-slider">

								
									<swiper
										:slides-per-view="1"
										:space-between="0"
					
										:modules="[Pagination]"
										:pagination="{
										type: 'fraction',
										el: '.controls-slider-box__wrapper'
										}"
										
										>
										<swiper-slide 
										v-for="image in dish.sliderImage"
											:key="image.id"	
											:image="image"
											
											
										>
										<div class="main-preview-dishs__slider _ibg">
											<img v-bind:src="(`${image.img}`)" alt="">
										</div>
										</swiper-slide>
										<div class="box-slider__controls controls-slider-box">
												<div class="controls-slider-box__wrapper"></div>
										</div>
									</swiper>

								</div>


							</div>
						</div>
					</div>
				
				</div>

				
			</div>

		</main>
		<footer class="footer">
			
		</footer>
		

	</div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem, 
	Disclosure, DisclosureButton, DisclosurePanel, 
	Listbox, ListboxButton, ListboxOptions, ListboxOption  } from '@headlessui/vue'
	
</script>

<script>


import axios from 'axios';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";
import 'swiper/css';

export default {
  name: 'App',

  components: {
	Swiper,
	SwiperSlide,

	// MyPenelUi
  },
  data() {
	return {
		unLock: false,
		locale:'ru',
		selectedLang: null,
	}
  },
  
  methods: {
	...mapActions({
		fetchAbout: 'user/fetchAbout',
		fetchCategories: 'user/fetchCategories',
		fetchLangList: 'user/fetchLangList',
	}),
  },
  computed: {
	...mapState({
		about: state => state.user.about,
		categories: state => state.user.categories,	
		langList: state => state.user.langList,
	}),
	swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	updatedSelectedLang: function () {
	// возвращаем первый элемент из langList
	return this.langList[0]
    }
  },

  watch: {
	selectedLang(newValue, oldValue) {
		// передаем значение в родительский компонент
		
		this.locale = newValue.name
		
	},
		// watcher для langList
		langList: function () {
			// обновляем значение selectedLang при изменении langList
			this.selectedLang = this.updatedSelectedLang
		}
	},
	
  
  mounted() {
	this.fetchCategories()	
	this.fetchAbout()
	this.fetchLangList()
	this.selectedLang = this.updatedSelectedLang
	  
	  document.body.classList.add('bg-light')

	  const targetNode = this.$refs.menuWatch.$el;

// Options for the observer (which mutations to observe)
const config = { attributes: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
for (const mutation of mutationList) {
	if (mutation.attributeName == 'aria-expanded' && mutation.target.ariaExpanded === 'true') {
		// console.log('Выключить скррол');
		document.body.classList.add('_lock')
	} else if (mutation.attributeName == 'aria-expanded' && mutation.target.ariaExpanded === 'false') {
		document.body.classList.remove('_lock')
		// console.log('включаем скролл');
	}
}
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing

  },
  beforeUpDate() {
		

  },
//   async mounted() {
//     await this.$nextTick()
//     this._observer = new MutationObserver((mutationList) => {
//       mutationList.forEach(mutation => {
//         if (mutation.type === 'childList') {
//           console.log('children added/removed', { added: mutation.addedNodes, removed: mutation.removedNodes})
//         }
//       })
//     })

//     this._observer.observe(this.$refs.menuWatch.$el, { childList: true })
//   },
//   beforeUnmount() {
//     this.observer.disconnect()
//   },
  beforeDestroy() {
    this.observer.disconnect()
  },
  unmounted () {
		document.body.classList.remove('bg-light')
		// observer.disconnect();
		}
}

</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:regular,600,700&display=swap&subset=cyrillic-ext);
 @font-face {
	font-family: "GlorySPU";
	font-display: swap;
	src: url("@/assets/fonts/GlorySignaturePersonalUse.woff2") format("woff2"), url("@/assets/fonts/GlorySignaturePersonalUse.woff") format("woff");
	font-weight: 400;
	font-style: normal;
 }

* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

aside,
nav,
footer,
header,
section {
	display: block;
}

html {
	font-size: 15px;
}

html,
body {
	height: 100%;
	min-width: 320px;
}

body {
	line-height: 1;
	font-family: "Open Sans";
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: "Open Sans";
	font-size: inherit;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
	background-color: inherit;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

/*
&::-webkit-scrollbar {
	display: none;
}
*/
body {
	color: #333333;
}

body._lock {
	overflow: hidden;
}

.wrapper {
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(@/assets/bg-templates/bg-template-10.jpg);
	font-family: "Open Sans";
	color:#333333;
}

._container {
	max-width: 1170px;
	margin: 0 auto;
	max-width: 570px;
	padding: 0 10px;
}


._ibg {
	position: relative;
}

._ibg img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}

body.ie ._ibg {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

body.ie ._ibg img {
	width: 0;
	height: 0;
	opacity: 0;
	visibility: hidden;
}

/* slider swiper style general start */
.swiper {
	overflow: hidden;
	z-index:0;
}

.swiper .swiper-wrapper {
	width: 100%;
	height: 100%;
	box-sizing: content-box;
	display: flex;
	position: relative;
}

.swiper.swiper-container-vertical .swiper-wrapper {
	flex-direction: column;
}

.swiper.swiper-container-autoheight .swiper-wrapper {
	align-items: flex-start;
}

.swiper-container-initialized .swiper-slide {
	flex-shrink: 0;
}

.swiper-container-android .swiper-slide,
.swiper-container-android .swiper-wrapper {
	transform: translate3d(0px, 0, 0);
}

.swiper-button-lock {
	display: none !important;
}

.controls-slider-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	pointer-events: none;
	z-index: 1;
}


.swiper-slide {
	width: 100% !important;
}


.main-preview-dishs__slider {
min-width:0;	
padding: 0 0 74% 0;
max-width: 100%;
display: block;
}
.main-preview-dishs__slider img {
border-radius: 0px;
}

/* slider swiper general all end */


.header__container {
	margin-top: 10px;
}

.header__top {
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	margin-bottom: 20px;
	position: relative;
}

.header__title {
	max-width: none;
	font-weight: 600;
	font-size: 16px;
	line-height: 122%;
	text-transform: uppercase;
}

.header__text {
	font-weight: 400;
	line-height: 122%;
	margin-top: 5px;
}

.header__logo  {
	width: 100%;
max-width: 150px;
max-height: 60px;
}
.header__logo img {
	width: 100%;
max-width: 150px;
max-height: 60px;
object-fit: contain;
object-position: left ;
}


.icon-menu {
	display: flex;
	position: absolute;
	top: 18px;
	right: 10px;
	width: 25px;
	height: 18px;
	cursor: pointer;
	z-index: 15;
}

.icon-menu span {
	transition: all 0.3s ease 0s;
	top: calc(50% - 2px);
	left: 16px;
	position: absolute;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: #333333;
}

.icon-menu span:first-child {
	top: 0px;
}

.icon-menu span:last-child {
	top: auto;
	bottom: 0px;
}

.icon-menu._active span {
	left: 7px;
	transform: scale(0);
	border-radius: 0px;
}

.icon-menu._active span:first-child {
	transform: rotate(-45deg);
	top: calc(50% - 2px);
	width: 100%;
	height: 3px;
}

.icon-menu._active span:last-child {
	transform: rotate(45deg);
	bottom: calc(50% - 1px);
	width: 100%;
	height: 3px;
}

.menu {
	flex: 0 1 420px;
}

.menu__container {
	z-index: 5;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: auto;
	top: 0;
	left: 0;
	background: linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(@/assets/bg-templates/bg-template-10.jpg);
	transition: left 0.3s ease 0s;
	padding: 100px 20px 30px 10px;
}
.menu__body {
	margin: 0 auto;
	max-width: 570px;
}
.menu__body::before {
	content: "";
	position: fixed;
	width: 100%;
	height: 50px;
	top: 0;
	left: 100%;
	transition: all 0.3s ease 0s;
	z-index: 2;
}

.menu__body._active {
	left: 0;
}

.menu__body._active::before {
	left: 0;
}

.menu__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0px 0px 15px 0px;
	padding: 5px 0px;
	position: relative;
}

.menu__item:last-child {
	margin-bottom: 0;
}

.menu__link {
	text-align:left;
	transition: color 0.3s ease 0s;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	

}






.menu__sub-list {
	position: relative;
	padding: 10px 0;
	flex: 1 1 100%;
	margin: 10px 0px 0px 0px;
}





.menu__sub-item:not(:last-child) {
	margin: 0px 0px 20px 0px;
}

a.menu__sub-link {
	color: inherit;
}





._icon-arrow-down::after {
   min-width:12px;
	content: '';
	position: relative;
	top: 0px;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(180deg);
	width: 12px;
	height: 8px;
	background: url(@/assets/icons/arrow-down-s.svg) no-repeat;
}

._icon-arrow-down._active::after {
	transform: rotate(0deg);
}

.menu__header-logo {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 10px;
}

.page {
	flex: 1 1 auto;
}

.page__title {
	font-weight: 400;
	font-size: 16px;
	line-height: 122%;
	text-transform: uppercase;
	font-family: 'GlorySPU';
	margin-top: 20px;
}

.category {
	margin-top: 25px;
	padding-top: 20px;
}

.category__title {
	font-weight: 400;
	font-size: 20px;
	line-height: 122%;
	text-transform: uppercase;
	font-family: 'GlorySPU';

}

.category__text {
	font-weight: 400;
	line-height: 122%;
	padding-top: 5px;
}

.rup {
	margin-top: 40px;
	padding-top: 15px;
}

.rup__title {
	font-weight: 400;
	font-size: 16px;
	line-height: 122%;
	text-transform: uppercase;
	font-family: 'GlorySPU';
}

.rup__text {
	font-weight: 400;
	line-height: 122%;
	margin-top: 5px;
}

.rup__image {
	margin-top: 10px;
	padding: 0 0 74% 0;
}

.item {
	margin-top: 40px;
	padding-top: 15px;
}

.item__title {
	font-weight: 400;
	font-size: 18px;
	line-height: 122%;
	text-transform: uppercase;
}
.item__text {
	font-weight: 400;
	line-height: 122%;
	margin-top: 5px;
}

.item__info {
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.item__price {
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
}


.item__weight {
	font-weight: 400;
	line-height: 15px;
}

.item__box-slider {
	margin-top: 10px;


}

.item__image {
	margin-top: 10px;
	padding: 0 0 74% 0;


}

.box-slider {
	position: relative;
}

.box-slider__slide {
	min-width: 100%;


}

.box-slider__image {
	padding: 0 0 74% 0;
}

.controls-slider-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	pointer-events: none;
}

.controls-slider-box__wrapper {
	background-color: #DDCCBC;
	border-radius: 50px;
	padding: 4px 10px;
	width: 47px;
	height: 25px;
	font-size: 14px;
	font-weight: 400;
	display: flex;
	align-items: center;
	justify-content: center;
}





/* select */


.select {
	position: relative;
	margin-bottom: 40px;
 }
 .select__item {
	width:100% ;
}
 .select__title {
	color: inherit;
	border: none;
	background: transparent;
	cursor: pointer;
	border-radius: 4px;
 }
 .select__title._active>.select__value._icon-arrow-down::after{
	transform: rotate(0deg);
}

 .select__value {
	display: flex;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	height: 30px;
	padding: 0px 0px;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
 }
 .select__value span {
	display: flex;
	width: 100%;
	height: 1em;
	overflow: hidden;
 }

 
 .select__options {
	color: #000;
	position: relative;
	top: 0px;
	border-radius: 0 0 4px 4px;
	min-width: 100%;
	left: 0;
		border-top: 0;
	font-size: 14px;
	border: none;
	z-index: 100;
	overflow: hidden;
	background: transparent;
}
 


.select__value img {
	margin-right: 10px;
	width: 12px;
	height: 12px;
	position: relative;
	top: 4px;
}

.select__value span{
   font-size: 16px;
	font-family: 'GlorySPU';
	font-weight: 400;
	overflow: visible;
}


.select__option {
	font-weight: 400;
	font-size: 12px;
	cursor: pointer;
	font-family: 'GlorySPU';
	margin: 0px 0px 0px 0px;
	background: transparent;
	text-transform: uppercase;
}

.select__option-wrapper._hidden {
	display: none;
}
.select__option-wrapper {
	padding: 8px 0px 0px 0px;
}
.select__option img {
	margin-right: 10px;
	position: relative;
	top: 2px;
}


.select__form {
	width: 100%;
	font-family: inherit;
	font-weight: 700;
 }




.footer {
	min-height: 100px;
}




/* animate */
.menu-enter-active,.menu-leave-active {
  transition: all .3s ease;
}

.menu-enter-from,.menu-leave-to {
	transform: translate(100%,0px);
}


.menu-item-enter-active,.menu-item-leave-active {
  transition: all .3s ease;
}

.menu-item-enter-from,.menu-item-leave-to {
	transform: scale(0.9);
	opacity: 0;
}
/* animate */

</style>