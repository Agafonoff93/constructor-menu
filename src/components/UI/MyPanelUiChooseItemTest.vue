<template>
		<div   class="ui__buttons">			
			<div class="ui__buttons-panel buttons-panel">
				<div class="buttons-panel__top">
					<div class="buttons-panel__title">qweweqweqwe</div>
					<button @click="$emit('closeUi')" class="buttons-panel__cancel">Закрыть</button>
				</div>
				<div class="buttons-panel__bottom" >
					<button  class="buttons-panel__button">
						
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.54 6L5.87997 0.459996C5.35725 0.158155 4.76397 3.3477e-05 4.16036 0.00169137C3.55676 0.00334926 2.96435 0.164727 2.4433 0.469435C1.92225 0.774142 1.49112 1.21132 1.19372 1.73657C0.896306 2.26182 0.743208 2.85643 0.749971 3.46V14.58C0.749971 15.487 1.11029 16.3569 1.75167 16.9983C2.39304 17.6397 3.26293 18 4.16997 18C4.77041 17.999 5.36006 17.8404 5.87997 17.54L15.54 12C16.059 11.6996 16.49 11.268 16.7896 10.7484C17.0891 10.2289 17.2468 9.63972 17.2468 9.04C17.2468 8.44027 17.0891 7.85109 16.7896 7.33156C16.49 6.81203 16.059 6.38041 15.54 6.08V6ZM14.54 10.19L4.87997 15.81C4.66346 15.9327 4.41884 15.9972 4.16997 15.9972C3.9211 15.9972 3.67648 15.9327 3.45997 15.81C3.24407 15.6853 3.06479 15.506 2.94015 15.2901C2.81552 15.0742 2.74993 14.8293 2.74997 14.58V3.42C2.74993 3.17069 2.81552 2.92577 2.94015 2.70986C3.06479 2.49394 3.24407 2.31465 3.45997 2.19C3.67738 2.06915 3.92127 2.00389 4.16997 2C4.4185 2.0051 4.66211 2.07029 4.87997 2.19L14.54 7.77C14.756 7.89459 14.9353 8.07387 15.06 8.28978C15.1847 8.5057 15.2504 8.75065 15.2504 9C15.2504 9.24934 15.1847 9.49429 15.06 9.71021C14.9353 9.92612 14.756 10.1054 14.54 10.23V10.19Z" fill="#F78408"/>
							</svg>
						<span>Предпросмотр</span>
					</button>									
									
				</div>

			</div>								
		</div>				
</template>

<script>

export default {
	props: {
		
		
		
	},
	data() {
	return { 
		openUi: false
		
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
  color: #828282;
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
  height: 109px;
  max-width: 600px;
  margin: 0 auto;
  
}
/* .ui__buttons._active {
	height:150px;
} */



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
  color: #828282;
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
  align-items: center;
  /* margin: 0 15px; */
}

.buttons-panel__button svg {
  margin-right: 9px;
}
.buttons-panel__button span {
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

</style>