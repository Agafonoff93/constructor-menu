<template>

	<div style="flex:1 0 50%" class="page__input input-page input-page_category">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
							Рубрики - это более детальное разделение Вашего меню. Как правило, это типы блюд, например, супы, салаты, десерты и т.п.
						</div>
						<div class="input-page__box">
							<div class="box-input__label _label">Расположение в меню</div>
							<MySelectProba 
							placeholder="Родительская категория"							
							v-model="form.label_id"
							:options="categories"
							:error="error"
							/>						
						</div>


						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
							<my-input 							
							type="text" 
							placeholder="Название рубрики"
							v-model="rubric.label.ru"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								
								v-model="rubric.text.ru"
								:limit="1200"
								></my-textarea>
								
							</div>
						</div>
						<my-input-img-rubric
						v-model:valueimage="rubric.img"					
						ref="MyInputImgRubric"
						@deleteImage="deleteImage"
						@removeabout="$emit('removeabout', $event)"	
						@beforeImageChange="handleBeforeImageChange"	
						/>

					</div>
				</div>
			
					

					<button-orange 
					@click="createrubric"
				
					>
					Сохранить
					</button-orange>
					<div  v-if="uiButtonHidden == false" class="ui__container _container ">	
							<div class="ui__fixed-wrapper">
							<button @click="hideRubric" class="ui__button-cancel">
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
   name: 'EditingRubric',
  props: {
	rubricsObject: {
				type: Object,	
				required: false,
			},
	categories: {
		type: Array,
	},
	categoryId: {
		type: Number,
		required: false,
	}
	// modelValue: {
	// 	type: [String, Number]
	// }
  },

	data() {
		return {
			rubric: {
				// value:'',
				label: {
					ru: '',
					},
					text: {
					ru: '',
					},
				img:'',
				dishs:[],
				beforeImage: null,
			},
				
		
			form:{
				label_id: null,
				role_ids:[]
			},
			error: null,
			uiButtonHidden: false
		}
	},


	components:{
		MySelect,
		MySelectProba,
	},
	methods: {
	
		
	createrubric() {
			if(this.form.label_id != null){
				if(this.error != null){
					this.error = null
				}
			
				if(this.rubric.value == null){
					this.rubric.value = Date.now();
				}
				this.$emit('createrubric', this.rubric,  this.form.label_id, this.beforeImage)
				this.rubric = {
					value: Date.now(),
					label: {
					ru: '',
					},
					text: {
					ru: '',
					},
					img:''
				};
				this.form.label_id = null;
				this.$refs.MyInputImgRubric.noShowPreviewImg();
				this.$emit('hideRubric')
			
				
			}else{
			
				this.error = 'Категория не указана'			
			}		
	},
	hideRubric(){
		this.$emit('hideRubric')
	},
	deleteImage(){
		this.rubric.img = ''
		console.log('Удаление картинки рубриуи')
	},
	handleBeforeImageChange(beforeImage) {
		console.log(beforeImage)
      this.beforeImage = beforeImage
    },
	},

	mounted() {
		if(this.categoryId != null){
			this.form.label_id = this.categoryId 
		}
		if(this.rubricsObject !=  undefined){
			this.uiButtonHidden = true
			this.rubric = this.rubricsObject 
			if(this.rubric.img != ''){
			this.$refs.MyInputImgRubric.showRubricImg(this.rubric.img);
		}
			this.form.label_id = this.categoryId 
		
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