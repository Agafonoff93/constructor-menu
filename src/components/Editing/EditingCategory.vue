<template>

	<div style="flex:1 0 50%" class="page__input input-page input-page_category">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
							Категория - это основные разделы Вашего меню. Обычно, это различные кухни, напитки или специальные
							предложения.
						</div>
						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
							<my-input 							
							type="text" 
							placeholder="Название категории"
							v-model="category.label"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								
								v-model="category.text"
								:limit="1200"
								></my-textarea>
								
							</div>
						</div>

					</div>
				</div>
			
					

					<button-orange 
					@click="createcategory"
					>
					Сохранить
					</button-orange>
					
				
		</div>
</template>


<script>

export default {
   name: 'EditingCategory',
  props: {

  },
  
	data() {
		return {
			category: {
				label:'',
				text:'',
			},
			

		}
	},
	methods: {
		createcategory() {
				this.category.value = Date.now();
				this.$emit('create', this.category, 'second param', '3 param')
				this.category = {
					label: '',
					text: ''
				}
		
		},
		
	},
	computed: {
		
	},

	
	
}
</script>

<script>

</script>