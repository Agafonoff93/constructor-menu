<template>
	<div 

	>
	<div  class="ui__container _container ">
							
							<div class="ui__fixed-wrapper">
								<div   class="ui__buttons">
									
						
									
									<div  class="ui__button-choose">
										
										<span>Выберите шаблон</span>
									</div>
								
								</div>
							
							</div>
						</div>
					</div>
</template>

<script>

export default {
	props: {
		
		// uiMainVisible: {
		// 	type:Boolean,
		// 	default:false
		// },
		
	},
	data() {
	return { 
	
		
	}
  },


  
	methods: {
		openUiMain() {
			this.$emit('openUiMain')		
		console.log('отпарвить еммит')
		this.openUi = true
	},
	cancelUi(){
		this.$emit('getClose')
		console.log('клик')
	},
	hideUiMain(){
		console.log('клик стоп')
		this.$emit('hideUiMain')	
	},
	seeEditingCategory() {
		console.log('запуск категории')
		this.$emit('seeEditingCategory')
		// this.$refs.MyInputImgDish.noShowPreviewImg();
	},
	seeEditingRubric() {
		console.log('запуск рубрики')
		this.$emit('seeEditingRubric')
		// this.$refs.MyInputImgDish.noShowPreviewImg();
	},
	seeEditingDish() {
		console.log('запуск блюда')
		this.$emit('seeEditingDish')
		// this.$refs.MyInputImgDish.noShowPreviewImg();
	},
  },
}
</script>

<style scoped>

.ui__wrapper_transparent{
	position: absolute;
	margin-top: -70px;
   top: 0px;
   left: 0;
   width: 100%;
   height: 100%;
	/* background-color: #eb575780; */
	z-index: 5;
}
.ui__container {
  min-height: 50px;
  padding-bottom: 55px;
}
.ui__button-orange {
  background: #F78408;
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  line-height: 145%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  margin: 30px auto;
  max-width: 232px;
}
.ui__button {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
}
.ui__button img {
  margin-right: 9px;
}
.ui__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  width: 100%;
  line-height: 15px;
  color: #EB5757;
}
.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}
.ui__buttons {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 15px 15px 20px 15px;
  visibility: visible;
  transition: all 0.3s ease 0s;
  height:55px;
  max-width: 600px;
  margin: 0 auto;
  
}
.ui__buttons._active {
	height:150px;
}
.ui__button-choose svg {
  margin-right: 9px;
}
.ui__button-choose span {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}
.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
}


.buttons-panel__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.buttons-panel__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.buttons-panel__cancel {
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
  opacity: 0.8;
  padding: 7px 0;
}
.buttons-panel__bottom {
  display: flex;
  justify-content: space-between;
}
.buttons-panel__button {
  display: flex;
  min-width:77px;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
}
.buttons-panel__button_dish img {
  filter: grayscale(1);
}
.buttons-panel__button_dish span {
  color: #5d5d5d;
}
.buttons-panel__editing {
  display: flex;
  align-items: center;
}
.buttons-panel__сorrect {
  margin-right: 22px;
}
.buttons-panel__сorrect-btn {
  display: flex;
  align-items: center;
}
.buttons-panel__сorrect-btn img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.buttons-panel__сorrect-btn span {
  color: #828282;
  font-size: 16px;
  line-height: 18px;
}

/* animation-main-up_slide*/
.up_slide-enter-active,
.up_slide-leave-active {
  transition: opacity 1s ease-out;
 
}

.up_slide-enter-from,
.up_slide-leave-to {
	opacity: 0;
  transform: translateY(30px);
}

/* animation-main-ui*/


</style>