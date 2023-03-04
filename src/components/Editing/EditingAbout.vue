<template>

	<div class="page__input input-page input-page_about">
				<div class="input-page__container _container">
					<div class="input-page__body">
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
									
							@removeabout="$emit('removeabout', about)"
							ref="MyInputImg"
						
							/>
						
						</div>

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
			uiButtonHidden: false
		}
	},
	expose: ['seeAboutImage'],
	methods: {
		saveAbout() {
			this.$emit('save', this.about)
		},
		hideAbout(){
			this.$emit('hideAbout')
			
		},
		seeAboutImage(){
		
			this.$refs.MyInputImg.showAboutImg();
		}
	},
	
	computed: {
	 
	},

	mounted() {
		if(this.about.img != ''){
			this.$refs.MyInputImg.showAboutImg();
		}
	   if(this.about.img || this.about.title || this.about.text != ''){
			this.uiButtonHidden = true
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


</style>