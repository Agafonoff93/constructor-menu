<template>
	<header>
	<div class="header__container _container">
		<div class="header__body">
			<button @click="$router.push('/')" class="header__logo">
				<div class="header__image">
					<img src="@/assets/logo.svg" alt="logo">
				</div>
				
				<div   class="header__title">
					Конструктор Меню
				</div>
			
			</button>
			<div class="header__version version">
				<div class="version__label">Версия меню:</div>
				<div  	 class="version__lang select-lang">				
						<MySelectLang		
						
						:langList="langList"
						:langListReserve="langListReserve"
						@selectedLangChanged="$emit('selectedLangChanged',$event)"
					
						/>
				</div>
			
			</div>
		</div>

	</div>
	
	</header>
</template>

<script>

import MySelectLang from '@/components/UI/MySelectLang'
export default {
	props: { 

	langList: {
		type: Array,
		required: true
	},
	langListReserve: {
		type: Array,
		required: true
	},
	// languageId: {
	// 	type:  [Number, String],
	// 	required: true
	// },
},
methods: {
	
},
components: {
	MySelectLang,
  },
}
</script>

<style scoped>

</style>