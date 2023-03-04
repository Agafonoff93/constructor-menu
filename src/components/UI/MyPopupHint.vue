<template>
	<div 
	v-if="show" 
	@click.stop="hidePopup"
	class="hint"
	>
		<div class="hint__container">
			<div @click.stop class="hint__content"> 
			<slot></slot>
			</div>
		
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-popup-hint',
	props: {
		show: {
			type:Boolean,
			default:false
		},
		category:{
			type: Object
		},
		rubric:{
			type: Object
		},
		dish:{
			type: Object
		},
		title:{
			type: String
		},
		titleText:{
			type: String
		},
	},

	methods: {
		
		
	}
	
}
</script>

<style scoped>


.hint__title {
	font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px;
}
.hint__text {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-bottom: 20px;
}

.hint {
  /* -webkit-overflow-scrolling: touch; */
  z-index: 100;
  padding: 30px 10px;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
	pointer-events: none;
	align-items: flex-end;

}

.hint::before {
  content: "";
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  opacity: 1;
}



.hint__container{
	
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.hint__content {
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
  pointer-events:auto;
  margin-bottom: 50px;
}

.hint__body {
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

.hint__close {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 30;
  content: 'нет';
}

.hint__buttons {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
}
.hint__cancel {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	color: #828282;
}
.hint__agree {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #EB5757;

}
</style>