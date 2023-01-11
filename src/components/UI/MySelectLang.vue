<template>
	<div @click="openAddPanel" class="select-lang__wrapper">
		<Listbox as="div" ref="itemMy"  v-model="selectedLang">
			<div  class="select-lang__title"><ListboxButton>{{ selectedLang.name }}</ListboxButton></div>
			<transition
			name="ui"
			>
        
			<ListboxOptions  class="select-lang__options">
				<ListboxOption
					v-for="lang in props.langList"
					:key="lang.id"
					:value="lang"
					:disabled="lang.unavailable"
					v-slot="{ active, selected }"
					class="select-lang__option"
				>
				     <img v-bind:src="(`${lang.img}`)" alt="lang-icon">
					  <span
					  :class="[ {_active: selected}, ]"
						 >{{ lang.name }}</span
					  >
		
				</ListboxOption>
				<button @click="openAddPanelLang" class="select-lang__add">
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.8333 6.16668H7.83331V1.16668C7.83331 0.945663 7.74552 0.733702 7.58923 0.577421C7.43295 0.421141 7.22099 0.333344 6.99998 0.333344C6.77897 0.333344 6.567 0.421141 6.41072 0.577421C6.25444 0.733702 6.16665 0.945663 6.16665 1.16668V6.16668H1.16665C0.945633 6.16668 0.733671 6.25447 0.577391 6.41075C0.421111 6.56703 0.333313 6.779 0.333313 7.00001C0.333313 7.22102 0.421111 7.43299 0.577391 7.58927C0.733671 7.74555 0.945633 7.83334 1.16665 7.83334H6.16665V12.8333C6.16665 13.0544 6.25444 13.2663 6.41072 13.4226C6.567 13.5789 6.77897 13.6667 6.99998 13.6667C7.22099 13.6667 7.43295 13.5789 7.58923 13.4226C7.74552 13.2663 7.83331 13.0544 7.83331 12.8333V7.83334H12.8333C13.0543 7.83334 13.2663 7.74555 13.4226 7.58927C13.5788 7.43299 13.6666 7.22102 13.6666 7.00001C13.6666 6.779 13.5788 6.56703 13.4226 6.41075C13.2663 6.25447 13.0543 6.16668 12.8333 6.16668Z" fill="#828282"/>
					</svg>
				</button>
				<transition name="ui">
					<div
					class="select-lang__options select-lang__options_add options"
					
					>
					   <div @click="areOptionsAddVisible = !areOptionsAddVisible" class="select-lang__close">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.8333 6.16668H7.83331V1.16668C7.83331 0.945663 7.74552 0.733702 7.58923 0.577421C7.43295 0.421141 7.22099 0.333344 6.99998 0.333344C6.77897 0.333344 6.567 0.421141 6.41072 0.577421C6.25444 0.733702 6.16665 0.945663 6.16665 1.16668V6.16668H1.16665C0.945633 6.16668 0.733671 6.25447 0.577391 6.41075C0.421111 6.56703 0.333313 6.779 0.333313 7.00001C0.333313 7.22102 0.421111 7.43299 0.577391 7.58927C0.733671 7.74555 0.945633 7.83334 1.16665 7.83334H6.16665V12.8333C6.16665 13.0544 6.25444 13.2663 6.41072 13.4226C6.567 13.5789 6.77897 13.6667 6.99998 13.6667C7.22099 13.6667 7.43295 13.5789 7.58923 13.4226C7.74552 13.2663 7.83331 13.0544 7.83331 12.8333V7.83334H12.8333C13.0543 7.83334 13.2663 7.74555 13.4226 7.58927C13.5788 7.43299 13.6666 7.22102 13.6666 7.00001C13.6666 6.779 13.5788 6.56703 13.4226 6.41075C13.2663 6.25447 13.0543 6.16668 12.8333 6.16668Z" fill="#828282"/>
							</svg>
						</div>
						<div
						
						class="select-lang__option"
						v-for="lang in props.langListReserve"
						:key="lang.name"
						>
						
						<img v-bind:src="(`${lang.img}`)" alt="lang-icon">
						<span class="none">{{lang.name}}</span>
						</div>
			
					</div>
		      </transition>
			</ListboxOptions>
			</transition>
		</Listbox>
		
 	</div>
 </template>
 
 <script setup>
	import { ref, onMounted } from 'vue'
	import {
	  Listbox,
	  ListboxButton,
	  ListboxOptions,
	  ListboxOption,
	} from '@headlessui/vue'
 
	const props = defineProps({
	langList: Array,
	modelValue:[String, Number, Array],
	langListReserve: Array,
	languageId: [Number, String],

})



const selectedLang = ref(props.langList[0])

const areOptionsAddVisible =  ref(false);

// const name = computed(()=> {

// if(props.options != null){
// return props.options.filter(option => {
// 	if (Array.isArray(props.modelValue)){
// 		return props.modelValue.includes(option.id);

// 	}

// 	return props.modelValue === option.id;
// }).map(option => option.name).join(', ');
// }
// })



function openAddPanelLang() {
console.log('add panel lang')
areOptionsAddVisible.value = true;
console.log(open)
}
 
  const itemMy = ref(null)

onMounted(() => {
  itemMy.value
  console.dir( itemMy.value)
})

function openAddPanel() {
	console.log(itemMy.value.$slots)

  }
 </script>


 <style>


.select-lang__wrapper  {
	position: relative;
	z-index: 7;

}


.select-lang__title {
  color: #828282;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
}
.select-lang__title  button {
	padding-right: 5px;
	color: #828282;
}

.select-lang__options {
	border: solid 1px #aeaeae;
	position: absolute;
	top: 0px;
	right: 0px;
	cursor:pointer;
	padding: 4px 20px 15px;
	text-align: center;
	width: 80px;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	
}

.select-lang__options_add {
	right: 84px;
}

.select-lang__option {
	display: flex;
	padding: 3px 0 3px 0 ;
   margin-bottom: 4px;
	
}

.select-lang__option  span._active{
	color:#F78408;
}

.select-lang__option img {
	display: inline-block;
	position: relative;
	width: 12px;
	height: 12px;
   margin-right: 5px;
}
.select-lang__add{
	text-align: center;
}
.select-lang__close{
	text-align: center;
	transform: rotate(45deg);
	margin-bottom: 10px;
}


.options p:hover {
	background: #e7e7e7;
}


._icon-arrow-down::after {
	display: inline-block;
	content: '';
	position: relative;
	top: 0px;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(0deg);
	min-width: 8px;
	height: 5px;
	/* background: url(../assets/icons/arrow-down-lang.svg) no-repeat; */
}
._icon-arrow-down._active::after {
	transform: rotate(180deg);
}
</style>