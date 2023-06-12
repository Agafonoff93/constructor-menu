<template>

	<div class="page__input input-page input-page_about">
				<div class="input-page__container _container">
					<div v-if="!isUserLoading" class="input-page__body">
						<div class="input-page__content _text">
						Расскажите о своём ресторане! В чём его особенности и преимущества. А также добавьте лого.
						</div>
						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
						
							<my-input 							
							type="text" 
							placeholder="Название ресторана"
							v-model="about.title.ru"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								placeholder="Описанние"
								v-model="about.text.ru"
								:limit="1200"
								></my-textarea>
								
							</div>
							<my-input-img
							v-model:valueimage="about.img"	
							@beforeImageChange="handleBeforeImageChange"		
							@removeabout="$emit('removeabout', $event)"
							ref="MyInputImg"
						
							/>
						
						</div>

					</div>
					<div  v-else class="input-page__loading">
						<img src="@/assets/loading.gif" alt="loading">
					</div>
				</div>
			
					

					<button-orange 
					@click="saveAbout"
					>
					Сохранить
					</button-orange>
					<div v-if="uiButtonHidden == false" class="ui__container _container ">	
							<div class="ui__fixed-wrapper">
							<button @click="hideAbout" class="ui__button-cancel">
											Отменить
							</button>
							</div>
					</div>

		</div>
</template>


<script>
import {mapState} from 'vuex'

export default {
   name: 'EditingAbout',
  props: {
   about: {
		type: Object,
		required: true
	},
	
  },
	data() {
		return {
			// about: {
			// 	title:'',
			// 	text:'',
			// 	img:'',
			// },
			title: '',
			text:'',
			uiButtonHidden: false,
			beforeImage: null,
		}
	},
	expose: ['seeAboutImage'],
	methods: {
		saveAbout() {
			this.$emit('save', this.about, this.beforeImage)
		},
		hideAbout(){
			this.$emit('hideAbout')
			
		},
		seeAboutImage(){
		
			this.$refs.MyInputImg.showAboutImg();
		},
		handleBeforeImageChange(beforeImage) {
      this.beforeImage = beforeImage
    },
	},
	
	computed: {
	...mapState({

		isUserLoading: state => state.user.isUserLoading,
		
	}),
	
	
		
	

  },

	mounted() {
		console.log(this.isUserLoading)
		if(this.about.img != ''){
			this.$refs.MyInputImg.showAboutImg();
			console.log('изображение есть')
		}
	   if(this.about.img || this.about.title || this.about.text != ''){
			this.uiButtonHidden = true
		}
		if(this.about.img = ''){
			console.log('изображения нет')
		}
   
  }
	
}
</script>

<style scoped>

.ui__container {
  /* min-height: 50px;
  padding-bottom: 55px; */
}

.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}

.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  width:100%;
  line-height: 15px;
  color: #EB5757;
}
.input-page__loading {
	width:100%;
	height: 100%;
	background-color: #ffffff77;
}

</style>