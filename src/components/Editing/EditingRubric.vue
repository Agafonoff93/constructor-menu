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
							v-model="rubric.label"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								
								v-model="rubric.text"
								:limit="1200"
								></my-textarea>
								
							</div>
						</div>
						<my-input-img-rubric
						v-model:valueimage="rubric.img"					
						ref="MyInputImgRubric"
						@deleteImage="deleteImage"
						/>

					</div>
				</div>
			
					

					<button-orange 
					@click="createrubric"
				
					>
					Сохранить
					</button-orange>
					<div  class="ui__container _container ">	
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
				label:'',
				text:'',
				img:'',
				dishs:[],
			},
				
			people: [
				{ value:1, label: 'Wade Cooper' },
				{ value:2, label: 'Arlene Mccoy' },
				{ value:3, label: 'Devon Webb' },
				{ value:4, label: 'Tom Cook' },
				{ value:5, label: 'Tanya Fox' },
				{ value:6, label: 'Hellen Schmidt' },
			],
			roles: [
				{value: 1, label: "Marketing"},
				{value: 2, label: "Front desk"},
				{value: 3, label: "Support"}
			],
			form:{
				label_id: null,
				role_ids:[]
			},
			error: null

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
				// console.log('создаем рубрику')
				if(this.rubric.value == null){
					this.rubric.value = Date.now();
				}
				this.$emit('createrubric', this.rubric,  this.form.label_id)
				this.rubric = {
					value: Date.now(),
					label: '',
					text: '',
					img:''
				};
				this.form.label_id = null;
				this.$refs.MyInputImgRubric.noShowPreviewImg();
				this.$emit('hideRubric')
			
				
			}else{
				// console.log('не судьба')
				this.error = 'Категория не указана'			
			}		
	},
	hideRubric(){
		this.$emit('hideRubric')
	},
	deleteImage(){
		this.rubric.img = ''
	},
	
	},

	mounted() {
		
		if(this.rubricsObject !=  undefined){
			this.rubric = this.rubricsObject 
			if(this.rubric.img != ''){
			console.log(this.rubric.img)
			
			this.$refs.MyInputImgRubric.showRubricImg(this.rubric.img);
		}
			this.form.label_id = this.categoryId 
			// this.form.label_id = 
		}
   //  console.log(this.about) // I'm text inside the component.
	//  console.log('категории', category)
	
	 console.log(this.rubricsObject)
	 console.log(this.rubric)
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