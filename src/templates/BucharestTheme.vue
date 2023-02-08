<template>
	<div :style="{ 'background': ` url(${require('@/assets/bg-templates/bg-template-12.jpeg')})` }" class="wrapper">
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
					<MenuItems :style="{ 'background': `url(${require('@/assets/bg-templates/bg-template-12.jpeg')})` }" class="menu__body _container">
						<div class="menu__list">
						<div v-if="about.img != ''" class="menu__header-logo"><img v-bind:src="(`${about.img}`)" alt="logo"></div>
						
						<Disclosure 
						as="div"
						v-slot="{ open }"
						v-for="category in this.categories"
						:key="category.value"
						class="menu__item">
									<DisclosureButton as="button" :class="{'_active': open }" class="menu__link category__title _icon-arrow-down" 
										type="button">{{ category.label}}</DisclosureButton>
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
											>{{ rubric.label }}</a>
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
					<div class="header__title">{{about.title}}</div>
					<div class="header__text">{{about.text}}</div>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container _container">
				<div class="page__title">Меню</div>
				<div 
				class="page__category category"
				v-for="category in this.categories"
				:key="category.value"
				>
					<div class="category__header-block">
						<div  class="category__title">{{ category.label }}</div>
						<div class="category__text">{{ category.text }}</div>
					</div>
					<div 
					class="category__body rup"
					v-for="rubric in category.rubrics"
					:key="rubric.value"
					>
						<div :id="(`rubric_${category.value}`+`${rubric.value}`)" class="rup__header-block">
							<div  class="rup__title rup__title_cold-snacks">{{ rubric.label }}</div>
							<div class="rup__text">{{ rubric.text }}</div>
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
								<div class="item__title">{{ dish.label }}</div>
								<div class="item__text">{{ dish.text }}</div>
								<div class="item__info">
									<div class="item__price rub">{{ dish.price }}</div>
									<div class="item__weight">{{ dish.weight }}</div>
								</div>

								<div 
								v-if="dish.sliderImage.length != 0"
								class="item__box-slider box-slider">

								
									<swiper
										:slides-per-view="1"
										:space-between="0"
										@swiper="onSwiper"
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
											@slideChange="onSlideChange"
											
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
			<!-- <div class="footer__container _container">
				<div class="footer__box-btns">
					 <button href="#subscription" class="footer__button _button _popup-link">Подписка на новости</button> 
					<button href="#subscription" class="footer__button _button _popup-link">Получи месяц бесплатного
						использования после оценки</button>
				</div>
			</div> -->
		</footer>
	</div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem, 
	Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'
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
	}
  },
  setup() {
		 const onSwiper = (swiper) => {
			// console.log(swiper);
			
		 };
		 const onSlideChange = () => {
			// console.log('slide change');
		 };

		 return {
			onSwiper,
			onSlideChange,
			modules: [Pagination],
		 };
	  },
  methods: {
	...mapMutations({

	}),
	...mapActions({
		fetchUser: 'user/fetchUser',
		testUser:'user/testUser'
	}),
	
 
	
  },
  computed: {
	...mapState({
		isUserLoading: state => state.user.isUserLoading,
		about: state => state.user.about,
		categories: state => state.user.categories,	
		langList: state => state.user.langList,
      langListReserve: state => state.user.langListReserve, 
		themes: state => state.templates.themes
	}),
	...mapGetters({

	}),
	swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	
  },
  mounted() {
	  this.fetchUser()
	  console.log(this.about.img.length)
	  document.body.classList.add('bg-light')

	//   const observer = this.$refs.menuWatch.$el.getAttribute('aria-expanded')
	//   new MutationObserver((mutationsList, observer) => {
   //      console.log(mutationsList);
   //      console.log(observer);
   //  }).observe(this.$el, { attributes: true });
	//   console.log(this.$nextTick())
		// Select the node that will be observed for mutations
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
	color: #ffffff;
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
	background: url(@/assets/bg-templates/bg-template-12.jpeg);
	background-size: contain;
	color: #ffffff;
}

._container {
	max-width: 570px;
	margin: 0 auto;
	padding: 0 10px;
}

.rub:after {
	content: "₽";
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

.swiper {
	overflow: hidden;
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









.header__container {
	margin-top: 10px;
}

.header__top {
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	padding-bottom: 20px;
	padding: 10px 10px 20px 10px;
	position: relative;
	/* padding: 10px; */
	background: rgba(0, 0, 0, 0.5);
}

.header__bottom {
	background: rgba(0, 0, 0, 0.5);
	padding: 0 10px 10px 10px;
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


.header__title {
	font-weight: 600;
	line-height: 122%;
	text-transform: uppercase;
	font-size: 16px;
}

.header__text {
	font-weight: 400;
	line-height: 122%;
	margin-top: 5px;
}

.icon-menu {
	display: flex;
	position: absolute;
	top: 18px;
	right: 23px;
	width: 25px;
	height: 18px;
	cursor: pointer;
	z-index: 15;
	background-color: transparent;
}

.icon-menu span {
	transition: all 0.3s ease 0s;
	top: calc(50% - 2px);
	left: 16px;
	position: absolute;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: #ffffff;
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

.menu__list{
	background: rgba(0, 0, 0, 0.5);
	padding: 10px 22px 10px 10px;
}

.menu__body {
	z-index: 5;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: auto;
	top: 0;
	left: 0;
	background: url(@/assets/bg-templates/bg-template-12.jpeg);
	transition: left 0.3s ease 0s;
	padding: 10px 10px 30px 10px;
	
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

/* .menu__body._active {
	left: 0;
}

.menu__body._active::before {
	
	
	width: 100%;

} */

.menu__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;
	padding: 0px 0px 30px 0px;


}

.menu__item:last-child {
	margin-bottom: 0;
}

.menu__link {

	transition: color 0.3s ease 0s;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
   background: transparent;
}






.menu__sub-list {
	position: relative;
	padding: 10px 0;
	flex: 1 1 100%;
	
	/* padding: 20px 0px 10px 10px;
	background: rgba(0, 0, 0, 0.5); */
}





.menu__sub-item:not(:last-child) {
	margin: 0px 0px 15px 0px;
}

.menu__sub-link {
	color: inherit;
}





._icon-arrow-down::after {

	content: '';
	position: relative;
	top: 0px;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(180deg);
	width: 12px;
	height: 8px;
	background: url(@/assets/icons/arrow-down-s-white.svg) no-repeat;
}

._icon-arrow-down._active::after {
	transform: rotate(0deg);
}
.menu__header-logo img {
	position: relative;
	z-index: 2;
	max-width: 150px;
	max-height: 60px;
}
.menu__header-logo {
	position: relative;
	padding: 10px;
}

/* .menu__header-logo::after {
	content: '';
	height: 90px;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 0;
} */




.page {
	flex: 1 1 auto;
}
.page__title{
	padding: 10px 15px 10px 15px;
	margin: 20px 0;
	background: rgba(0, 0, 0, 0.5);
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
}

.category {
	margin-top: 20px;
}

.category__header-block {
	padding: 10px;
	background: rgba(0, 0, 0, 0.5);
}

.category__title {
	font-weight: 700;
	font-size: 20px;
	line-height: 122%;
	text-transform: uppercase;
	color: #ffffff;
	text-align:left;
}

.category__text {
	font-weight: 400;
	line-height: 122%;
	padding-top: 5px;
}

.rup {
	margin-top: 15px;
	padding-top: 5px;
}

.rup__header-block {
	padding: 10px;
	background: rgba(0, 0, 0, 0.5);
}


.rup__title {
	font-weight: 600;
	font-size: 18px;
	line-height: 122%;
	text-transform: uppercase;
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
	margin-top: 20px;
	padding-top: 15px;
	padding: 10px;
	background: rgba(0, 0, 0, 0.5);
}

.item__title {
	font-weight: 600;
	font-size: 16px;
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

/* .controls-slider-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	pointer-events: none;
}

.controls-slider-box__wrapper {
	background: rgba(0, 0, 0, 0.7);
	border-radius: 50px;
	padding: 4px 10px;
	width: 47px;
	height: 25px;
	font-size: 14px;
	font-weight: 400;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
} */

._button {

	background: rgba(0, 0, 0, 0.81);
	;
	font-weight: 400;
	font-size: 18px;
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
}



/* select */

.select {
	position: relative;
	margin-bottom: 40px;
 }
 .select__item {
	position: relative;
 }
 .select__title {
	color: inherit;
	border: none;
	background-color: transparent;
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
 }
 .select__value span {
	display: flex;
	width: 100%;
	height: 1em;
	overflow: hidden;
 }

 .select__input {
	width: 100%;
	background-color: transparent;
	height: 100%;
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
 }
 
 .options {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
 }
 .options__item {
	position: relative;
	cursor: pointer;
 }
 .options__input {
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	left: 0;
	top: 0;
	visibility: hidden;
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
	color: #ffffff;
	font-family: 'Open Sans';
	font-weight: 600;
}


.select__option {
	font-weight: 400;
	font-family: 'Open Sans';
	font-size: 14px;
	cursor: pointer;
	padding: 8px  0px 0px 0px;
	margin: 0px 0px 0px 0px;
	color: #ffffff;
}
.select__option img {
	margin-right: 10px;
	position: relative;
	top: 2px;
}

.select {
	width: 100%;
}
.select__form {
	width: 100%;
	font-family: inherit;
	font-weight: 700;
 }

 

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
	background: url(@/assets/bg-templates/bg-template-12.jpeg);
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
	fill:#ffffff;
}

.popup__button {
	max-width: 450px;
}

.footer {
	margin-top: 100px;
	height: 50px;
}
.footer__container {
	width: 100%;
	background: url(@/assets/bg-templates/bg-template-12.jpeg);
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%,0px);
}

._button:first-child {
	margin: 15px 0;
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
.controls-slider-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	pointer-events: none;
	z-index: 5;
}

.controls-slider-box__wrapper {
	background-color: #FFFFFF;
	border-radius: 40px;
	padding: 4px 10px;
	width: 47px;
	color: #828282;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
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