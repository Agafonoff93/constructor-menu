<template>
	<swiper
	  :slides-per-view="1"
	  :space-between="0"
	  @swiper="onSwiper"

		:pagination="{
		type: 'fraction',
		el: '.controls-slider-box__wrapper'
		}"
    :modules="modules"
	>
	  <swiper-slide 
	  v-for="image in images.sliderImage"
		:key="image.id"	
		:image="image"
		 @slideChange="onSlideChange"
		
	  >
	  <div class="main-preview-dishs__slider _ibg">
		<img v-bind:src="(`${image.img}`)" alt="">
	  </div>
	</swiper-slide>
	<div class="box-slider__controls controls-slider-box">
			<div class="controls-slider-box__wrapper" ></div>
	</div>
	</swiper>
 </template>
 <script>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Pagination } from "swiper";

 
	// Import Swiper styles
	import 'swiper/css';
 
	export default {
	  components: {
		 Swiper,
		 SwiperSlide,
	  },
	  props: {
		images:{
			type: Object,
			required: true,
		},
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
	  computed: {

		swiper() {
			return this.$refs.mySwiper.$swiper;
		}

		},
		
	};
 </script>

 <style scoped>
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
border-radius: 5px;
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
</style>

