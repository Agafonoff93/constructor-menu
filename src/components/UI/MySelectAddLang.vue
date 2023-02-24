<template>
	<Popover class="relative">
	  <PopoverButton>	
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.8333 6.16668H7.83331V1.16668C7.83331 0.945663 7.74552 0.733702 7.58923 0.577421C7.43295 0.421141 7.22099 0.333344 6.99998 0.333344C6.77897 0.333344 6.567 0.421141 6.41072 0.577421C6.25444 0.733702 6.16665 0.945663 6.16665 1.16668V6.16668H1.16665C0.945633 6.16668 0.733671 6.25447 0.577391 6.41075C0.421111 6.56703 0.333313 6.779 0.333313 7.00001C0.333313 7.22102 0.421111 7.43299 0.577391 7.58927C0.733671 7.74555 0.945633 7.83334 1.16665 7.83334H6.16665V12.8333C6.16665 13.0544 6.25444 13.2663 6.41072 13.4226C6.567 13.5789 6.77897 13.6667 6.99998 13.6667C7.22099 13.6667 7.43295 13.5789 7.58923 13.4226C7.74552 13.2663 7.83331 13.0544 7.83331 12.8333V7.83334H12.8333C13.0543 7.83334 13.2663 7.74555 13.4226 7.58927C13.5788 7.43299 13.6666 7.22102 13.6666 7.00001C13.6666 6.779 13.5788 6.56703 13.4226 6.41075C13.2663 6.25447 13.0543 6.16668 12.8333 6.16668Z" fill="#828282"/>
		</svg>
		
		</PopoverButton>
 
	  <PopoverPanel 
	  v-slot="{ close }"
	  class="select-lang__options select-lang__options_add options">
		     <PopoverButton class="select-lang__close">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.8333 6.16668H7.83331V1.16668C7.83331 0.945663 7.74552 0.733702 7.58923 0.577421C7.43295 0.421141 7.22099 0.333344 6.99998 0.333344C6.77897 0.333344 6.567 0.421141 6.41072 0.577421C6.25444 0.733702 6.16665 0.945663 6.16665 1.16668V6.16668H1.16665C0.945633 6.16668 0.733671 6.25447 0.577391 6.41075C0.421111 6.56703 0.333313 6.779 0.333313 7.00001C0.333313 7.22102 0.421111 7.43299 0.577391 7.58927C0.733671 7.74555 0.945633 7.83334 1.16665 7.83334H6.16665V12.8333C6.16665 13.0544 6.25444 13.2663 6.41072 13.4226C6.567 13.5789 6.77897 13.6667 6.99998 13.6667C7.22099 13.6667 7.43295 13.5789 7.58923 13.4226C7.74552 13.2663 7.83331 13.0544 7.83331 12.8333V7.83334H12.8333C13.0543 7.83334 13.2663 7.74555 13.4226 7.58927C13.5788 7.43299 13.6666 7.22102 13.6666 7.00001C13.6666 6.779 13.5788 6.56703 13.4226 6.41075C13.2663 6.25447 13.0543 6.16668 12.8333 6.16668Z" fill="#828282"/>
							</svg>
				</PopoverButton>
			<PopoverButton		
			
			class="select-lang__option"
			v-for="lang in props.langListReserve"
			@click="$emit('addLangList', lang)"
			:key="lang.name"
			>
			
			<img v-bind:src="(`${lang.img}`)" alt="lang-icon">
			<span class="none">{{lang.name}}</span>
			</PopoverButton>
 
		
	  </PopoverPanel>
	</Popover>
 </template>
 
 <script setup>
	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

	function accept(close) {
   
    close()
  }

	const props = defineProps({
	langList: Array,
	modelValue:[String, Number, Array],
	langListReserve: Array,
	languageId: [Number, String],

})
 </script>


<style scoped>

.select-lang__option span{
	text-transform: uppercase;
	
}
.select-lang__option {
	display: flex;
   margin-bottom: 10px;
   align-items: center;
}

</style>