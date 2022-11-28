<template>

	<div style="flex:1 0 50%" class="page__input input-page input-page_about">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
						Расскажите о своём ресторане! В чём его особенности и преимущества. А также добавьте лого.
						</div>
						<div class="input-page__box box-input">
							<div class="box-input__label _label">Основная информация</div>
						
							<my-input 							
							type="text" 
							placeholder="Название категории"
							v-model="about.title"
							:limit="100"
							/>
							<div class="box-input__wrapper">
								<my-textarea 
								
								v-model="about.text"
								:limit="1200"
								></my-textarea>
								
							</div>
							<my-input-img
							v-model:valueimage="about.img"					
							@removeabout="$emit('removeabout', about)"
							
						
							/>
						</div>

					</div>
				</div>
			
					

					<button-orange 
					@click="saveAbout"
					>
					Сохранить
					</button-orange>
					
				
		</div>
</template>


<script>

export default {
   name: 'EditingAbout',
  props: {
   
  },
	data() {
		return {
			about: {
				title:'',
				text:'',
				img: null,
			},
			title: '',
			text:'',

		}
	},

	methods: {
		saveAbout() {
			this.$emit('save', this.about)
		
		},
		
	},
	
	computed: {
		
	},

	
	
}
</script>