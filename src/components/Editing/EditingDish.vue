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
							<!-- <MySelectProba 
							placeholder="Select roles"
							v-model="form.role_ids"
							:options="roles"
							multiple
							error="Роль небыла выбрана"
							/> -->
							<!-- <MySelect
							:categorys="categorys"
							/> -->
						</div>


						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
							<my-input 							
							type="text" 
							placeholder="Название категории"
							v-model="dish.label"
							:limit="100"
							
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								placeholder="Описание"
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
						v-model:valueimage="dish.img"					
						
						/>

					</div>
				</div>
			
					

					<button-orange 
					@click="createdish"
				
					>
					Сохранить
					</button-orange>
					
				
		</div>
</template>


<script>
import MySelect from "@/components/UI/MySelect"
import MySelectProba from "@/components/UI/MySelectProba"
export default {
   name: 'EditingDish',
  props: {
	categories: {
		type: Array,
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
						this.$emit('createdish', this.dish,  this.formlabel_id, this.formlabel_rubric_id)
						this.dish = {
							value: Date.now(),
							label: '',
							text: '',
							price:'',
							weight:'',
							img:''
						};
					}else{
					console.log('рубрика отсутствует не судьба')
					this.error = 'Рубрика не указана'			
				}						
					this.formlabel_rubric_id = null
					this.formlabel_id = null;
					this.$refs.MyInputImgDish.noShowPreviewImg();
				}else{
					console.log('не судьба')
					this.error = 'Категория не указана'			
				}		
		},
		createcategory() {
				this.category.value = Date.now();
				this.$emit('create', this.category, 'second param', '3 param')
				this.category = {
					label: '',
					text: ''
				}
		
		},
	
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

	}
	

	
	
}
</script>

