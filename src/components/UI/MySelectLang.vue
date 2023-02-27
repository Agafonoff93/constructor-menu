<template>
	<div class="select-lang__wrapper">
		<Listbox  v-model="selectedLang">
			<div @click="showPopupAdd" class="select-lang__title"><ListboxButton >
				<span v-if="selectedLang">{{ selectedLang.name }}</span>
				<span v-else>RU</span>
			</ListboxButton></div>
			<transition
			name="ui"
			>
        
			<ListboxOptions  class="select-lang__options">
				<ListboxOption
					v-for="lang in props.langList"
					:key="lang.id"
					:value="lang"
					v-slot="{ selected }"
					class="select-lang__option"		
					v-touch:longtap="() => longtapRemoveLang(lang)"
				>
				     <img v-bind:src="(`${lang.img}`)" alt="lang-icon">
					  <span
					  :class="[ {_active: selected}, ]"
						 >{{ lang.name }}</span
					  >
		
				</ListboxOption>
				
				
				<MySelectAddLang
				:langListReserve="langListReserve"
				@addLangList="addLangItem" 
				/>
	
				</ListboxOptions>
			</transition>
			<transition name="popup-transition">
		<my-popup-hint 
	 v-model:show="popupVisibleAdd"
	 >
			
				<div class="popup__text">
					<p>Чтобы добавить новую языковую версию меню, нажмите на “Плюс” и выберите нужный язык.</p> 
					<p>Чтобы удалить существующую версию меню, зажмите нужную версию.</p>
				</div>
				<div class="popup__buttons">
				
					<button 
					@click="hidePopup"
				
					class="popup__agree popup__agree_green"
					>
						Понятно!
					</button>
				
				</div>
				
	 </my-popup-hint>
	</transition>
		</Listbox>
		<transition name="popup-transition">
		<my-popup 
		
			v-model:show="popupVisible"
			>
			<div class="popup__title">
				Удаление языковой версии
				</div>
				<div class="popup__text">
					Вы уверены, что хотите удалить языковую версию меню для языка 
					<span class="_bold-light">“{{ langName.name }} ({{ langName.value }})”</span>? Отменить это действие будет невозможно.
					
					
				
				</div>
				<div class="popup__buttons">
					<button 
					class="popup__cancel"
					@click="hidePopup"
					>
						Отменить
					</button>
					<button 
					@click="removeLangItem" 
				
					class="popup__agree"
					>
						Да, удалить
					</button>
				
				</div>
				
	 </my-popup>

	</transition>


 	</div>
 </template>
 
 <script setup>
import { ref, watch,} from 'vue'
import { reactive } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

import MySelectAddLang from '@/components/UI/MySelectAddLang.vue'
import {  useStore ,mapState, mapGetters, mapActions, mapMutations } from 'vuex'


const props = defineProps({
  langList: Array,
  modelValue: [String, Number, Array],
  langListReserve: Array,
  languageId: [Number, String],
  user: [Object],
	
})

const emit = defineEmits(['removeLanguage', 'selectedLangChanged']);

const selectedLang = ref(props.langList[0])
const popupVisible = ref(false);
const popupVisibleAdd = ref(false);
const langName = ref();

// const thisOption = ref()

// Get the store instance
const store = useStore();

// Define a function to increment the counter using the store's `incrementCounter` action




// слушаем изменения selectedLang
watch(selectedLang, (newValue, oldValue) => {
  // передаем значение в родительский компонент
  emit('selectedLangChanged', newValue)
})


function showPopup() {
	popupVisible.value = true;
}
function showPopupAdd() {
	console.log(props.user)
	let userFirst = props.user.isfirsttimeUser
	if(userFirst == false){
		console.log('первый клик')
		popupVisibleAdd.value = true;
		store.dispatch('user/editUser', true);
	}else{
		console.log('уже был клик')
	}
	
}
function hidePopup() {
	popupVisible.value = false;	
	popupVisibleAdd.value = false;	
}

function longtapRemoveLang(lang) {
  
  langName.value = lang
  popupVisible.value = true;

//   console.log(langItem.value)
}


function addLangItem(lang) {

  console.log(lang)
  store.dispatch('user/addLangList', lang);
  store.dispatch('user/addLangItem', lang);
  store.dispatch('user/removeLangListReserve', lang);
//   store.dispatch('user/removeLangList', lang);

}
function removeLangItem() {


  selectedLang.value = props.langList[0]
  store.dispatch('user/removeLangList',  langName.value);
  store.dispatch('user/addLangListReserve',  langName.value);
  popupVisible.value = false;	
}





 </script>


 <style scoped >
._bold-light {
	text-transform: uppercase;
}

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
.select-lang__title span {
	text-transform: uppercase;
}
.select-lang__options {
	border: solid 1px #aeaeae;
	position: absolute;
	top: 0px;
	right: 0px;
	cursor:pointer;
	padding: 10px 20px 15px;
	text-align: center;
	width: 80px;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	text-transform: uppercase;
}

.select-lang__options_add {
	right: 84px;
}

.select-lang__option {
	display: flex;
	padding: 3px 0 3px 0 ;
	margin-bottom: 10px;
	
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

/*start popup */

.popup__title {
	font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px;
}
.popup__text {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-bottom: 20px;
}

.popup {
  /* -webkit-overflow-scrolling: touch; */
  z-index: 100;
  padding: 30px 10px;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;

}

.popup::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
}



.popup__container{
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.popup__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;

  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 100%;
  max-width: 500px;
  padding:10px 15px 15px 15px;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
	justify-content: center;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
  z-index: 150;
  position: relative;
  text-align: left;
}

.popup__body {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: #fff;
  padding: 50px;
  width: 100%;
  max-width: 800px;
}

.popup__close {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 30;
  content: 'нет';
}

.popup__buttons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.popup__cancel {
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	color: #828282;
}
.popup__agree {
	font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #EB5757;

}

.popup__agree_green {

color: #219653;

}

/*end popup */




/* animation */

.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: opacity 0.5s ease;
}

.popup-transition-enter-from,
.popup-transition-leave-to {
  opacity: 0;
}


</style>