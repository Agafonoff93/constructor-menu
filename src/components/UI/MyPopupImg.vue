<template>
	<div 
	v-if="show" 
	@click.stop="hidePopup"
	class="popup"
	>
		<div class="popup__container">
			<div @click.stop class="popup__content"> 
				<div class="popup__title">
			   	Удаление логотипа
				</div>
				<div class="popup__text">
					<slot></slot>
				</div>
				<div class="popup__buttons">
					<button 
					class="popup__cancel"
					@click="hidePopup"
					>
						Отменить
					</button>
					<button 
				
					@click="$emit('removeabout', about), hidePopup(), $emit('showPreviewImg',showPreviewImg)"  
					class="popup__agree"
					>
						Да, удалить
					</button>
				</div>
			</div>
		
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-popup-img',
	props: {

		show: {
			type:Boolean,
			default:false
		},
		 previewImage:  [String, Number, Object, null],
	},


	methods: {
		hidePopup() {
			this.$emit('update:show', false)
		},
	   
	}
	
}
</script>

<style scoped>


.popup__title {
	font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px;
}
.popup__text {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-bottom: 20px;
width: 100%;
position: relative;
}
.popup__image {
	position: absolute;
width: 100%;
max-width: 300px;

}

.popup {
  /* -webkit-overflow-scrolling: touch; */
  z-index: 100;
  padding: 30px 10px;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;

}

.popup::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
}



.popup__container{
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup__content {
 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;

  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 100%;
  max-width: 500px;
  padding:10px 15px 15px 15px;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
	justify-content: center;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
  z-index: 150;
  position: relative;
}

.popup__body {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: #fff;
  padding: 50px;
  width: 100%;
  max-width: 800px;
}

.popup__close {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 30;
  content: 'нет';
}

.popup__buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.popup__cancel {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	color: #828282;
}
.popup__agree {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #EB5757;

}
</style>