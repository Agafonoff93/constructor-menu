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
						ref="MyInputImgRubric"
						v-model:valueimage="rubric.img"					
						
						/>

					</div>
				</div>
			
					

					<button-orange 
					@click="createrubric"
				
					>
					Сохранить
					</button-orange>
					
				
		</div>
</template>


<script>
import MySelect from "@/components/UI/MySelect"
import MySelectProba from "@/components/UI/MySelectProba"
export default {
   name: 'EditingRubric',
  props: {
	categorys: {
		type: Array
	},
	categories: {
		type: Array,
	},
	// modelValue: {
	// 	type: [String, Number]
	// }
  },

	data() {
		return {
			rubric: {
				label:'',
				text:'',
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
					this.rubric.value = Date.now();
					this.$emit('createrubric', this.rubric,  this.form.label_id)
					this.rubric = {
						value: Date.now(),
						label: '',
						text: '',
						img:''
					};
					this.form.label_id = null;
					this.$refs.MyInputImgRubric.noShowPreviewImg();
			    
					
				}else{
					// console.log('не судьба')
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
	

	
	
}
</script>

