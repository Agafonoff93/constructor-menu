<template>

	<div  class="page__input input-page input-page_category">
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
							v-model="category.label.ru"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								
								v-model="category.text.ru"
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
					<div v-if="uiButtonHidden == false" class="ui__container _container ">	
							<div class="ui__fixed-wrapper">
							<button @click="hideCategory" class="ui__button-cancel">
											Отменить
							</button>
							</div>
					</div>
				
		</div>
</template>


<script>

export default {
   name: 'EditingCategory',
  props: {
	categoriesObject: {
				type: Object,	
				required: false,
			}
  },
 
	data() {
		return {
			category: {
				label: {
					ru: '',
					},
					text: {
					ru: '',
					},
				value: null,
				rubrics:[],	
			},
			uiButtonHidden: false

		}
	},
	
	methods: {
			createcategory() {
				if(this.category.value == null){
					this.category.value = Date.now();
				}	
				this.$emit('create', this.category, 'second param', '3 param')
				this.category = {
					label: {
						ru: '',
						},
						text: {
						ru: '',
					},
					rubrics:[],
				}
				this.$emit('hideCategory')
			},
			hideCategory(){
					this.$emit('hideCategory')
			},
	    
		},
		
	computed: {
		
	},
	mounted() {
		if(this.categoriesObject !=  undefined){
			this.category = this.categoriesObject 
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