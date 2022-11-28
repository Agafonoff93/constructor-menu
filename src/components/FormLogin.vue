<template>

	<div style="flex:1 0 50%" class="page__input input-page input-page_about">
				<div class="input-page__container _container">
					<div class="input-page__body">
						<div class="input-page__content _text">
							Расскажите о своём ресторане! В чём его особенности и преимущества. А также добавьте лого.
						</div>
						<div class="input-page__box box-input">
						
							<div class="box-input__label _label">Основная информация</div>
							<div>
								<input type='text' v-model='email' />

								<input type='password' v-model='password' />
							</div>
						</div>

					</div>
				</div>
			
					

					<button-orange 
					@click="login"
					>
					Login
					</button-orange>
					
				
		</div>
</template>


<script>

export default {
	props: ['onLogin'],
date() {
	return {
		email: 'sads',
		password: 'awer'
	}
},
methods: {
	login () {
   //  this.$emit('login', {
   //    email: this.email,
   //    password: this.password
   //  })
	this.onLogin({
    email: this.email,
    password: this.password
  })
  }
}
}
</script>