<template>
			<div class="input-page__box-images box-images">
			
							<div class="box-images__label _label">Фотографии</div>
							<div class="box-images__file file">


							
								<div class="file__preview">
									<div class="file__items-preview-box">
										<div 									
										v-for="(image, key) in imageArray" 
										:key="key"
										class="file__item-preview "
										>	
												<img class="preview" :ref="'image'" v-bind:src="(`${image.img}`)" />
												<button @click="focusButton(image, key)" :ref="'button'" class="file__item-preview-delete" :class="{'_active': focused }">
													<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8333 5.75004H17.6667V4.45837C17.6667 3.43066 17.2584 2.44504 16.5317 1.71834C15.805 0.991632 14.8194 0.583374 13.7917 0.583374H11.2083C10.1806 0.583374 9.195 0.991632 8.46829 1.71834C7.74159 2.44504 7.33333 3.43066 7.33333 4.45837V5.75004H2.16667C1.8241 5.75004 1.49555 5.88613 1.25332 6.12836C1.01109 6.3706 0.875 6.69914 0.875 7.04171C0.875 7.38428 1.01109 7.71282 1.25332 7.95505C1.49555 8.19729 1.8241 8.33337 2.16667 8.33337H3.45833V22.5417C3.45833 23.5694 3.86659 24.555 4.59329 25.2817C5.32 26.0084 6.30562 26.4167 7.33333 26.4167H17.6667C18.6944 26.4167 19.68 26.0084 20.4067 25.2817C21.1334 24.555 21.5417 23.5694 21.5417 22.5417V8.33337H22.8333C23.1759 8.33337 23.5044 8.19729 23.7467 7.95505C23.9889 7.71282 24.125 7.38428 24.125 7.04171C24.125 6.69914 23.9889 6.3706 23.7467 6.12836C23.5044 5.88613 23.1759 5.75004 22.8333 5.75004ZM9.91667 4.45837C9.91667 4.1158 10.0528 3.78726 10.295 3.54503C10.5372 3.30279 10.8658 3.16671 11.2083 3.16671H13.7917C14.1342 3.16671 14.4628 3.30279 14.705 3.54503C14.9472 3.78726 15.0833 4.1158 15.0833 4.45837V5.75004H9.91667V4.45837ZM18.9583 22.5417C18.9583 22.8843 18.8222 23.2128 18.58 23.4551C18.3378 23.6973 18.0092 23.8334 17.6667 23.8334H7.33333C6.99076 23.8334 6.66222 23.6973 6.41999 23.4551C6.17775 23.2128 6.04167 22.8843 6.04167 22.5417V8.33337H18.9583V22.5417Z" fill="white"/>
</svg>

												</button>
												<!-- <button @click="removeImage(image)" ref="button" class="file__item-preview-delete"></button> -->

										</div>
										<div v-if="imageArray.length <= 9 " class="file__item">
										
										<div class="file__button" :class="{ '_icon-css': imageArray.length <= 10 }"  @click="selectImage"><span></span> </div>
									
										<input v-if="imageArray.length <= 9 " class="file__input" multiple accept=".jpg, .png, .gif" ref="fileInput" type="file" 
										:valueimage="valueimage" 		
										@change="onFileChange">
									</div>
									</div>
									
								
							</div>				


							</div>
								<transition name="popup-transition">
									<my-popup-img 
									labelImage="Удаление фото"	
						      :previewImage="previewImage"
								v-model:show="popupVisibleImg"
								@removeabout="removeImage"
								@showPreviewImg="showPreviewImg"
								
								>								
								<div class="popup__image _ibg" v-if=" this.previewImage !== null ">	
									<img  v-bind:src="(`${previewImage.img}`)" alt="">
								</div>
								</my-popup-img>
								</transition>
						</div>
</template>



<script>



export default {
	name: 'my-input-img-dish',
	props: {
		valueimage: [String, Number, Object, Array,null],
		
	},

	expose: ['noShowPreviewImg','showDishImg'],
	data() {
      return {
			testArray:[],
		  imageArray:[],
        previewImage: null,
		  popupVisibleImg: false,
		  images: [],
		  focused: false,
		  focusEl:'',
      };
    },
	//  emits: 
	//         ['input', 'update:valueimage','removeabout','removeImg:priew']
	// 		,
	methods: {
		
		onFileChange(e) {	
			let vm = this;
			console.log(e.target.files)
			
			var selectedFiles = e.target.files;
			
				for (let i = 0; i < selectedFiles.length; i++) {
				this.images.push(selectedFiles[i]);
				}
			this.images = this.images.splice(0, 10)
			
				for (let i = 0; i < this.images.length; i++) {
				let reader = new FileReader();
				
				reader.onload = (e) => {
					this.images[i].src = reader.result;
					let number = this.valueimage.length
					console.log(number);
					
						let imageItem = {id: Date.now() , img: this.images[i].src, name:  this.images[i].name} 
						if(this.imageArray.length <= 9 ){
					 this.imageArray.push(imageItem)
					}
					 console.log(this.testArray)
					};
					
					// this.imageArray = this.imageArray.splice(0, 10)
					console.log(this.testArray)
				reader.readAsDataURL(this.images[i]);
				
				}
				
				
				console.log(this.imageArray)
			
		
			this.$emit('update:valueimage', this.imageArray) 
			
			console.log(this.imageArray)
			
		},
		
		selectImage () {
          this.$refs.fileInput.click()
      },
      showDishImg(sliderImage) {
			console.log('можем тут что нибуть сделать')
		
			this.imageArray = sliderImage
		
      },
		removeImage(image){
			console.log('хотим удалить картинку')
			console.log(this.imageArray)
			console.log(image)
			// this.$emit('removeImage',image)
			// this.imageArray.filter(p => p.id !== image.id)
			this.imageArray = this.imageArray.filter(p => p.id !== image.id)
			console.log(this.imageArray)
			this.$emit('update:valueimage', this.imageArray) 
		},
		showPreviewImg(){
			let input = this.$refs.fileInput
			this.previewImage = null;
			console.log('metod showPrevImg')
			this.images = []
		},
		noShowPreviewImg(){
			let input = this.$refs.fileInput
			this.previewImage = null;
			console.log('metod noShowPrevImg')
		   this.images = []
		},
		focusButton(image, key){
			console.log( this.focusEl)
			console.log( image)

			if(this.focusEl == key){
				this.popupVisibleImg = true;
				this.previewImage = image
				// this.$ref.MyPopupImg.imageItem(image)
				console.log('запускаем попап')
			}else{
				this.focusEl = key
			}
			this.$refs.button[key].focus()
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
	computed:{
	// focusEl(){
	// 	this.focusEl 
	// 	// немомню ,зачем?
	// }
	}

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

.buton__focus{
	background-color: aqua;
transition: all 0.3s ease 0s;
}

.buton__focus:focus{
	background-color: chartreuse;
}

.box-images {
	/* pointer-events: none; */
}


.file__item-preview-delete{
	pointer-events: auto;
	opacity: 0;
	transition: all 0.3s ease 0s;
	position: absolute;
	width: 100%;
  height: 100%;
  top: 0;
  left: 0;
	
  display: flex;
  align-items: center;
  justify-content: center;
 
  border-radius: 15px;
  cursor:pointer;
}

.file__item-preview-delete:focus{
	
  background: linear-gradient(0deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4));
  opacity:1;
}

.file__item-preview-delete svg {
	opacity:0;
}

.file__item-preview-delete:focus svg {
	opacity:1;
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
  order: -1;
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
.file__items-preview-box {
	display: flex;
	gap:7px;
	flex-wrap: wrap;
}
.file__item-preview {
	
  position: relative;
  width: 81px;
  height: 81px;
  border-radius: 15px;
}
.file__item-preview img {
  position: absolute;
  flex: 0 0 81px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 15px;
}
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
  flex-direction: row-reverse;
  justify-content: flex-end;
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

