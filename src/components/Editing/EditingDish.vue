<template>

	<div style="flex:1 0 50%" class="page__input input-page input-page_category">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
							Блюда - это основа Вашего меню. Вы можете добавить название, описание или состав, цену, граммовки и фото.
						</div>
						<div class="input-page__box">
							<div class="box-input__label _label">Расположение в меню</div>
							<MySelectProba 
							placeholder="Родительская категория"							
							v-model="formlabel_id"
							:options="categories"
							:error="error"
							/>
							<MySelectProba 

							placeholder="Родительская рубрика"							
							v-model="formlabel_rubric_id"
							:options="categoryRubrics"
							:error="error"
							/>
						
						</div>


						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
							<my-input 							
							type="text" 
							placeholder="Название блюда"
							v-model="dish.label"
							:limit="100"
							
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								placeholder="Описание/состав"
								v-model="dish.text"
								:limit="1200"
								></my-textarea>
								
							</div>
							<div class=" box-input__wrapper-pair">
								<div class="box-input__wrapper">
								<my-input 							
							type="text" 
							placeholder="Цена"
							v-model="dish.price"
							:limit="10"
							meaning="Руб"
							/>
								</div>
								<div class="box-input__wrapper">
							<my-input 							
							type="text" 
							placeholder="Вес"
							v-model="dish.weight"
							:limit="10"
						   meaning="г"
							/>
								</div>
							</div>
						</div>
						<my-input-img-dish
						ref="MyInputImgDish"
						v-model:valueimage="dish.sliderImage"					
						@removeImage="removeImage"
						/>

					</div>
				</div>
			
					

					<button-orange 
					@click="createdish"
				
					>
					Сохранить
					</button-orange>
					<div  class="ui__container _container ">	
							<div class="ui__fixed-wrapper">
							<button @click="hideDish" class="ui__button-cancel">
											Отменить
							</button>
							</div>
					</div>
				
		</div>
</template>


<script>
import MySelect from "@/components/UI/MySelect"
import MySelectProba from "@/components/UI/MySelectProba"
export default {
   name: 'EditingDish',
  props: {
	dishObject: {
				type: Object,	
				required: false,
			},
	categories: {
		type: Array,
	},
	categoryId: {
		type: Number,
		required: false,
	},
	rubricId: {
		type: Number,
		required: false,
	},
	// modelValue: {
	// 	type: [String, Number]
	// }
  },

	data() {
		return {
			dish: {
				label:'',
				text:'',
				price: '',
				weight: '',
				img:'',
				sliderImage:[],
			},
				
		
			form:{
				label_id: null,
				label_rubric_id: null,
				role_ids:[]
			},
			formlabel_id:null,
			formlabel_rubric_id:null,
			error: null,
			meaning: "руб",
			categoryRubrics: null,

		}
	},


	components:{
		MySelect,
		MySelectProba,
	},
	methods: {
	
		
		createdish() {
			   if(this.formlabel_id != null){
				
					if(this.error != null){
						this.error = null
					};
					if(this.formlabel_rubric_id != null){
						console.log('создаем блюдо')
						this.dish.value = Date.now();
						this.$emit('createdish', this.dish, this.formlabel_id, this.formlabel_rubric_id)
						this.dish = {
							value: Date.now(),
							label: '',
							text: '',
							price:'',
							weight:'',
							sliderImage:[]
						};
					}else{
					console.log('рубрика отсутствует не судьба')
					this.error = 'Рубрика не указана'			
				}						
					this.formlabel_rubric_id = null
					this.formlabel_id = null;
					this.$refs.MyInputImgDish.noShowPreviewImg();
					this.$emit('hideDish')
				}else{
					console.log('не судьба')
					this.error = 'Категория не указана'			
				}		
		},
		hideDish(){
				this.$emit('hideDish')
			},
		removeImage(image){
			this.dish.sliderImage.filter(p => p.id !== image.id)
			console.log('удаляем')
		}	
	
	},
	watch: {
		formlabel_id(){

			let categoryRubricsFind 
			if(this.formlabel_id != null){
				categoryRubricsFind = this.categories.find(p => p.value == this.formlabel_id).rubrics
			}
			
         if(categoryRubricsFind == ''){
				this.categoryRubrics = null
				this.formlabel_rubric_id = null
			}else{
				this.categoryRubrics = categoryRubricsFind
			}
		}

	},
	mounted() {
		if(this.categoryId != null){
			this.formlabel_id = this.categoryId
			this.formlabel_rubric_id = this.rubricId
		}
		if(this.dishObject !=  undefined){
			this.dish = this.dishObject 
			if(this.dish.sliderImage != ''){
			console.log(this.dish.sliderImage)
		
			
			this.$refs.MyInputImgDish.showDishImg(this.dish.sliderImage);
		}
		console.log(this.dish.sliderImage)
			this.formlabel_id = this.categoryId
			this.formlabel_rubric_id = this.rubricId
			// this.form.label_id = 
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