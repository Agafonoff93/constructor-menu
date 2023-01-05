<template>
			<div class="input-page__box-images box-images">
							<div class="box-images__label _label">Логотип</div>
							<div class="box-images__file file">

							
								<div class="file__preview">
									<div class="file__item">
										
										<div class="file__button" :class="{ '_icon-css': previewImage == null }" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"><span></span> </div>
									
										<input class="file__input" accept=".jpg, .png, .gif" ref="fileInput" type="file" 
										:valueimage="valueimage" 		
										@input="pickFile">
										
								</div>
								<div v-if="previewImage !== null" class="file__ui-block ui-block">
									<button  @click="selectImage"  class="ui-block__btn ui-block__btn_editing">
										<img src="@/assets/icons/btn-crct.svg" alt="correct"></button>
									<button  @click="showPopupImg" class="ui-block__btn ui-block__btn_remove">
										<img src="@/assets/icons/btn-del.svg" alt="delete"></button>

								</div>
							</div>				


							</div>
								<transition name="popup-transition">
									<my-popup-img 
								labelImage="Удаление логотипа"	
						      :previewImage="previewImage"
								v-model:show="popupVisibleImg"
								@removeabout="$emit('removeabout', about)"
								@showPreviewImg="showPreviewImg"
								>								
								<div class="popup__image _ibg" v-if=" this.previewImage !== null ">	
									<img  v-bind:src="(`${previewImage}`)" alt="">
								</div>
								</my-popup-img>
								</transition>
						</div>
</template>



<script>



export default {
	name: 'my-input-img',
	props: {
		valueimage: [String, Number, Object, null],
	},
	data() {
      return {
        previewImage: null,
		  popupVisibleImg: false,
      };
    },
	 expose: ['showAboutImg'],
	
	methods: {
		
		selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files	
		  
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
				this.$emit('update:valueimage', this.previewImage)
			}
			reader.readAsDataURL(file[0])
			this.$emit('input', file[0])
			console.log( this.previewImage)
			
			
        }
      },
		showPreviewImg(){
			let input = this.$refs.fileInput
			this.previewImage = null;
			input.value = ''
		},
		showAboutImg(){
			console.log('хочу показать')
			this.previewImage = this.valueimage
		},


		

		

		showPopupImg() {
		this.popupVisibleImg = true;
	},
	//  removeImg(){																																												
	// 	 console.log('шоу попап работает')
	// 	this.previewImage = null;
	// 	this.popupVisibleImg = true;
	//  }	
	},

}


</script>


<style scoped>
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

._icon-css{
	position: relative;
	width: 81px;
	height: 81px;
	border: 2px dashed #BDBDBD;
	border-radius: 15px;
	display: flex;
	flex:0 0 81px ;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
}
._icon-css span{
position: relative;
width:23px;
height: 3px;
top: 0;
left: 0;
background-color: #BDBDBD;
}
._icon-css span::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
transform: rotate(-90deg);
}


.file {
  width: 100%;
  height: auto;
}
.file__item {
  flex: 0 0 81px;
  position: relative;
  height: 81px;
}
.file__item-preview-remove {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
/* .file__item-preview-remove._active::after {
  content: url(@/assets/icons/remove.svg);
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 15px;
  
} */


/* .file__item::after {
  content: url(@/assets/icons/remove.svg);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 15px;
  opacity: 0;
  transition: all 0.3s ease 0s;
  pointer-events: none;
} */

/* .file__item:hover::after {
	opacity: 1;
} */

.file__item-preview {
  position: relative;
  width: 81px;
  height: 81px;
  border-radius: 15px;
}
/* .file__item-preview img {
  position: absolute;
  flex: 0 0 81px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 5px;
} */
.file__input {
  position: absolute;
  display: inline-flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
}
.file__button {
  width: 81px;
  height: 81px;
  /* display: block; */
  border-radius: 15px;
	cursor: pointer;
	background-size: cover;
	background-position: center center;
}
/* .file__button img {
  width: 100%;
} */
.file__preview {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.popup__image {
	margin: 0 auto;
padding: 0px 0px 64% 0px;
max-width: 300px;

}

.file__ui-block {
}
.ui-block {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 20px;
}

.ui-block__btn {
	padding: 5px;
}
.ui-block__editing {
}
.ui-block__remove {
}
</style>

