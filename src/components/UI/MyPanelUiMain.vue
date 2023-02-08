<template>
	<div 
	@click.stop="hideUiMain"
	:class="{ui__wrapper_transparent: uiMainVisible}"
	>
	<div @click.stop class="ui__container _container ">
							
							<div class="ui__fixed-wrapper">
								<div  :class="{_active: uiMainVisible}" class="ui__buttons">
									
									<div v-if="uiMainVisible" class="ui__buttons-panel buttons-panel">
										<div class="buttons-panel__top">
											<div class="buttons-panel__title">Добавление</div>
											<button @click="hideUiMain" class="buttons-panel__cancel">Отменить</button>
										</div>
										<div class="buttons-panel__bottom">
											<button @click="seeEditingCategory" class="buttons-panel__button">
												
												<img src="@/assets/icons/add-category.png" alt="категория">
												<span>Категория</span>
											</button>
											<button @click="seeEditingRubric" class="buttons-panel__button">
												<img src="@/assets/icons/add-rubric.png" alt="рублика">
												<span>Рубрика</span>
											</button>
											<button @click="seeEditingDish" class="buttons-panel__button">
												<img src="@/assets/icons/add-dish.png" alt="блюдо">
												<span>Блюдо</span>
											</button>
										</div>
		
									</div>
									
									
									<button @click="openUiMain" v-else class="ui__button-add">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="#F78408"/>
										</svg>
										<span>Добавить</span>
									</button>
								
								</div>
							
							</div>
						</div>
					</div>
</template>

<script>

export default {
	props: {
		
		uiMainVisible: {
			type:Boolean,
			default:false
		},
		
	},
	data() {
	return {
		
		
	}
  },


  
	methods: {
		openUiMain() {
			this.$emit('openUiMain')		
		console.log('отпарвить еммит')
		
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
  padding: 0px 0px 0px 0px;
  visibility: visible;
  transition: height 0.3s ease 0s;
  height:60px;
  max-width: 600px;
  margin: 0 auto;
  
}
.ui__buttons._active {
	height:150px;
	padding: 15px 15px 25px 15px;
}

.ui__button-add{
	cursor:pointer;
	width: 100%;
	border-radius: 20px 20px 0px 0px;
	padding: 15px 15px 25px 15px;
	text-align: left;
}
.ui__button-add svg {
  margin-right: 9px;
}
.ui__button-add span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
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