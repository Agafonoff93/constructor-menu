<template>
 	
	<div class="wrapper">
		
	
		<MainHeader
		class="header"
		v-model:langList="langList"
		:langListReserve="langListReserve"
		:languageId="languageId"
		:user="user"
		@addLanguage="addLanguage"
		@removeLanguage="removeLanguage"
		@selectedLangChanged="handleSelectedLangChanged"
		/>
  
	<main  class="page">
		
		<transition name="about">
		<EditingAbout
		v-if="visibleEditingAbout"
		@visibleAbout="visibleEditingAbout"
		@save="saveAbout"
		@hideAbout="hideAbout"
		@removeabout="removeabout"
		:about="about"
		ref="EditingAbout"
		/>
	  </transition>
	  <transition name="category">
		<EditingCategory
		v-if="visibleEditingCategory"
		@hideCategory="hideCategory"
		@create="createcategory"
		:categoriesObject="categoriesObject"
		:categories="categories"
		/>
	</transition>
		<transition name="rubric">
		<EditingRubric
		v-if="visibleEditingRubric" 
		@hideRubric="hideRubric"
		:categories="categories"
		@createrubric="createrubric"
		:rubricsObject="rubricsObject"
		:categoryId="categoryId"
		@removeabout="removeOthersImage"
		/>
		</transition>
		<transition name="dish">
		<EditingDish
		v-if="visibleEditingDish" 
		@hideDish="hideDish"
		@removeabout="removeOthersImage"
		:categories="categories"
		:dishObject="dishObject"
		:categoryId="categoryId"
		:rubricId="rubricId"
		@createdish="createdish"
		/> 
	   </transition>

		<transition name="category">
			<EditingLanguage
			v-if="visibleEditingLanguage"
			@hideEditingLanguage="hideEditingLanguage"
			:locale="locale"
			
			/>
	   </transition>

		<MainPreview 
		v-show="visibleMainPreview"
		v-model:visibleMain="visibleMainPreview"
		v-model:isUserLoading="isUserLoading"
		
		ref="MainPreview"
		:locale="locale"
		:about="about"
		:categories="categories"		
		@seeAbout="seeAbout"
		@seeEditingCategory="seeEditingCategory"
		@seeEditingRubric="seeEditingRubric"
		@seeEditingDish="seeEditingDish"
		@seeEditingLanguage="seeEditingLanguage"
		@removecategory="removecategory"
		@removerubric="removemyrubric"
		@removemydish="removemydish"
		
		/>

		
	</main>
	<footer class="footer">
	<div class="footer__container _container">
	
		
	<div class="footer__stick-wrapper">
		
	</div>
	</div>
	</footer>
	
	</div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import MainPreview from '@/components/MainPreview.vue'
import EditingAbout from '@/components/Editing/EditingAbout.vue'
import EditingCategory from '@/components/Editing/EditingCategory.vue'
import EditingRubric from '@/components/Editing/EditingRubric.vue'
import EditingDish from '@/components/Editing/EditingDish.vue'
import EditingLanguage from '@/components/Editing/EditingLanguage.vue'


import axios from 'axios';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import MyPenelUi from '@/components/UI/MyPenelUi'

export default {
  name: 'LayoutMain',	

  components: {
	MainPreview,
	MainHeader,
	EditingAbout,
	EditingCategory,
	EditingRubric,
	EditingDish,
	EditingLanguage,
  },
  data() {
	return {

      
		// isUserLoading: false,
		locale:'ru',
		languageId: 1,
		uiVisible:false,
		popupVisible: false,
		popupVisibleImg: false,
		visibleEditingAbout: false,
		visibleEditingCategory: false,
		visibleEditingRubric: false,
		visibleEditingDish: false,
			
		visibleMainPreview: true,
		categoriesObject: '',
		rubricsObject: '',
		dishObject: '',
		categoryId: null,
		rubricId: null,
	}
  },
  
  methods: {
	...mapMutations({

	}),
		...mapActions({
			setIdUser:'user/setIdUser',
			fetchAllData: 'user/fetchAllData',
			fetchUserData: 'user/fetchUserData',
			fetchUser: 'user/fetchUser',
			fetchAbout: 'user/fetchAbout',
			editAbout: 'user/editAbout',
			deleteAboutImage:'user/deleteAboutImage',
			fetchCategories: 'user/fetchCategories',
			addCategories: 'user/addCategories',
			editCategories: 'user/editCategories',
			removeCategories: 'user/removeCategories',
			addRubric: 'user/addRubric',
			removeRubric: 'user/removeRubric',
			addDish: 'user/addDish',
			removeDish: 'user/removeDish',
			fetchLangList: 'user/fetchLangList',
			fetchLangListReserve: 'user/fetchLangListReserve',
			changeTranslationLabel: 'user/changeTranslationLabel',
			changeTranslationText: 'user/changeTranslationText',
			toggleEditingLanguage: 'user/toggleEditingLanguage',
	}),



  saveAbout(data, beforeImage) {
	
  this.about = data;
  this.editAbout({data, beforeImage}); // Дождаться выполнения запроса на сервер?
  this.visibleEditingAbout = false;
  this.visibleMainPreview = true;
},
 
  hideAbout(){
	this.visibleEditingAbout = false
	  this.visibleMainPreview = true
  },
  hideCategory(){
	
	this.visibleEditingCategory = false
	this.visibleMainPreview = true
  },
  hideRubric(){
	this.categoryId = null
	
	this.visibleEditingRubric = false
	this.visibleMainPreview = true
  },
  hideDish(){
	this.categoryId = null
	
	this.visibleEditingDish = false
	this.visibleMainPreview = true
  },
  hideEditingLanguage(){

	this.visibleEditingLanguage = false
	this.visibleMainPreview = true
  },


	createcategory(category){
		if(this.categories.find(p => p.value == category.value)){
			this.editCategories(category)
		}else{
       
			this.addCategories(category)
			// this.categories.push(category);
		}
		// this.testUser()
	},
	createrubric(rubric, category_id, beforeImage){
		console.log(rubric)
		console.log(category_id)
		console.log(beforeImage)
		this.addRubric({rubric, category_id, beforeImage})
	},
	createdish(dish,  formlabel_id, formlabel_rubric_id ){
		this.addDish({dish, formlabel_id, formlabel_rubric_id})
	},
	removecategory(category){

		this.popupVisible = false;
		this.removeCategories(category)
	},
	removemyrubric(rubric , category){

		this.popupVisible = false;
		this.removeRubric({ rubric, category})
	},
	removemydish(dish, rubric, category){
		
		this.popupVisible = false;
		this.removeDish({ dish, rubric, category })
	},
	removeabout(url){
		console.log(url)
		// удаляем фото about
	
		this.deleteAboutImage(url)
		this.about.img = '';
		this.popupVisibleImg = false;
	},
	removeOthersImage(url){
		console.log(url)
		// удаляем фото about
		this.deleteAboutImage(url)
		this.popupVisibleImg = false;
	},
   seeAbout(){
		this.visibleEditingAbout = true
		this.visibleMainPreview = false
	
	
	},
	seeEditingCategory(category){
	
	this.categoriesObject = category
	this.visibleEditingCategory = true
	this.$refs.MainPreview.hideUiMain()
	this.visibleMainPreview = false
	
  },
	seeEditingRubric(rubric, category){
		if(category != undefined){
			this.categoryId = category.value
		}

	this.rubricsObject = rubric
	this.visibleEditingRubric = true
	this.$refs.MainPreview.hideUiMain()
	this.visibleMainPreview = false
  },
	seeEditingDish(dish, rubric, category){


	if(category != undefined){
			this.categoryId = category.value
		}
	if(rubric != undefined){
			this.rubricId = rubric.value
		}
	this.dishObject = dish

	this.visibleEditingDish = true
	this.$refs.MainPreview.hideUiMain()
	this.visibleMainPreview = false
  },
  
  seeEditingLanguage(event){
	
	this.changeTranslationLabel(event.label)
	this.changeTranslationText(event.text)
	this.visibleEditingLanguage = true
	this.visibleMainPreview = false
  },
   handleSelectedLangChanged(selectLang){
		this.locale = selectLang.name
	},
  addLanguage(){
	this.langList.push(lang);

  },
  removeLanguage(){
	// this.langList = this.langList.filter(p => p.id !== langList.id)
	// this.langListReserve.push(lang);
 
	
  },

 
	
  },
  computed: {
	...mapState({
		setJson: state => state.user.setJson,
		saveJson: state => state.user.saveJson,
		isUserLoading: state => state.user.isUserLoading,
		userId: state => state.user.userId,
		user: state => state.user.user,
		userSet: state => state.user.userSet,
		about: state => state.user.about,
		categories: state => state.user.categories,	
		langList: state => state.user.langList,
      langListReserve: state => state.user.langListReserve, 
		themes: state => state.templates.themes,
		translationLabel: state => state.user.translationLabel,
		translationText: state => state.user.translationText,
		visibleEditingLanguage: state => state.user.visibleEditingLanguage
	}),
	...mapGetters({
		
	}),
	
		
	

  },
  created: function() {
	this.fetchUser(window.myAppSettings.dataurl)
    console.log(window.myAppSettings.dataurl);
    console.log(window.myAppSettings.saveurl);
  
    this.$watch('visibleEditingLanguage', function(newVal, oldVal) {
      if(newVal == true){
			this.visibleMainPreview = false
		}
		if(newVal == false){
			this.visibleMainPreview = true
		}
    });
  },
  mounted() {
	if(this.$route.query.id != undefined){
		this.setIdUser(this.$route.query.id)
	}  
//   this.fetchUserData(this.userId) свой api откл 16.05.23 
//   this.fetchUserData()
	// this.fetchAllData()
	// this.fetchUser()

	console.log(this.userId)



  }
}

</script>







<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap&subset=cyrillic-ext);
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

aside,
nav,
footer,
header,
section {
  display: block;
}

html {
  font-size: 14px;
}

html,
body,
#app {
  height: 100%;
  min-width: 320px;
}

body {
  line-height: 1;
  font-family: "Montserrat";
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: "Montserrat";
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
  background-color: inherit;
  color: inherit;
}

button::-moz-focus-inner,:focus-visible {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

/*
&::-webkit-scrollbar {
	display: none;
}
*/
body {
  color: #333333;
  /* -webkit-text-fill-color: #333333;
  -webkit-text-fill-color: rgb(51, 51, 51) */
 
}
body._lock {
  overflow: hidden;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #F2F2F2;
}
._container {
  max-width: 550px;
  margin: 0 auto;
  padding: 0 15px;
}

.header__body {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__image {
  margin-right: 10px;
}
.header__title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  max-width: 150px;
  text-align:left;
  color: inherit;
}
.version {
  /* text-align: right; */
}
.version__label {
  font-weight: 500;
  line-height: 17px;
  color: #828282;
}
.select-lang {
	z-index: 2;
	position: relative;
}

.footer__container {
  padding-bottom: 55px;
}
.footer__button-orange {
  background: #F78408;
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  line-height: 145%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  margin: 30px auto;
  max-width: 232px;
}
.footer__button {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
}
.footer__button img {
  margin-right: 9px;
}
.footer__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.footer__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
}
.footer__stick-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}

.page {
  flex: 1 1 0;
  position:relative;
}
/* .page > div {
	background: #F2F2F2;
} */
.start__body {
  padding: 10px 0;
}
._bold-600-light{
	font-weight: 700;
  color: #F78408;
  font-weight: 600;
	font-size: 16px;
}
._bold-light{
	font-size:14px;
	line-height: 17px;
	font-weight: 700;
  color: #F78408;
}
.start__title {
  font-weight: 700;
  color: #F78408;
  margin-bottom: 20px;
}
.start__text {
  color: #4F4F4F;
  line-height: 17px;
}
.start__text span {
  color: #F78408;
  font-weight: 700;
}
.start__text p:not(:last-child) {
  margin-bottom: 15px;
}
.create {
  margin: 35px 0;
}
.create__image {
  text-align: center;
}
.create__title {
  margin-top: 10px;
  line-height: 17px;
  text-align: center;
  color: #828282;
}

.page__main-preview,.input-page {
	height:100%
}
.main-preview__container{
	display: flex;
    height: 100%;
    flex-direction: column;
}
.input-page {
	/* position:absolute;
	width:100%; */
	/* z-index:5; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #F2F2F2;
}
.input-page__body {
  display: flex;
  flex-direction: column;
}
.input-page__content {
  margin-top: 20px;
}
.input-page__box {
  margin-top: 30px;
}
.input-page__box > *:not(:last-child) {
  margin-bottom: 10px;
}
.input-page__box-images {
  margin-top: 30px;
}
.input-page__wrapper {
  display: flex;
  align-items: flex-end;
}
.input-page__button {
  background: #F78408;
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  line-height: 145%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  margin: 30px auto;
  max-width: 232px;
}



.box-images__file {
  margin-top: 10px;
}



.counter-text {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #BDBDBD;
  font-size: 12px;
  padding: 5px 9px;
}
.counter-text_align {
	display: flex;
	align-items: center;
	justify-content:center;
	height:100%;
}

._text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
  opacity: 0.8;
  -moz-user-select: -moz-none;
	-o-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}

._label {
  font-weight: 500;
  color: #828282;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.8;
  -moz-user-select: -moz-none;
	-o-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}


.select-lang__wrapper  {
	

}

.select-lang__options {
	border: solid 1px #aeaeae;
	position: absolute;
	top: 0px;
	right: 0px;
	cursor:pointer;
	padding: 10px 20px 15px;
	
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
   margin-bottom: 10px;
	align-items: center;
}

.select-lang__option.active  span{
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
	background: url(@/assets/icons/arrow-down-lang.svg) no-repeat;
}
._icon-arrow-down._active::after {
	transform: rotate(180deg);
}


/*Start animation */

.pages-enter-active, .pages-leave-active {
transition: all .3s ;	
}

.pages-enter-to {
	transform: translate(0px,-100%);
}
 .pages-leave-to {
	/* transform: translate(0px,-100%); */
}

/*End animation */


._attention {
	color: #EB5757;
}

._icon-css{
	position: relative;
	flex:0 0 40px;
	width: 40px;
	height: 40px;
	border: 2px dashed #BDBDBD;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
}
._icon-css span{
position: relative;
width:12px;
height: 2px;
top: 0;
left: 0;
background-color: #BDBDBD;
}
._icon-css span::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
transform: rotate(-90deg);
}



._icon-css-lg {
	position: relative;
	width: 150px;
	height: 150px;
	border: 2px dashed #BDBDBD;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px auto;
}
._icon-css-lg span{
position: relative;
width:43px;
height: 6px;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
}
._icon-css-lg span::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
transform: rotate(-90deg);
}

.main-preview-dishs__block {
   padding: 8px 13px;
  margin-left: 20px;
  background: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: 2px solid transparent;
  margin-top: 10px;
}


._focus{
	border: 2px solid orange;
}

._drag_item {
	border: 2px solid darkgrey;
	border-left: 7px double darkgrey;
	padding: 6px 13px 6px 7px;
}


._ibg {
	position: relative;
}

._ibg img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}





.select {
 position: relative;
}

.select__inactive {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgb(242 242 242 / 30%);
border-radius: 10px;
pointer-events: auto;
}

.select__button {
	padding: 10px 9px;
    width: 100%;
    border: 1px solid #BDBDBD;
    border-radius: 10px;
    color: #828282;
	 background-color: #fff;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;

}

.select__options {
	background: #FFFFFF;
	border: 1px solid #BDBDBD;
	border-top: none;
	border-radius: 0px  0px  10px  10px;
	position: absolute;
	z-index: 5;
	width: 100%;
	padding-top: 5px;
	top: 30px;
}

.select__option {
	padding: 11px 9px;
    width: 100%;
    color: #333333;
	 background-color: #fff;
	 border-radius: 10px;
	 cursor: pointer;
}
.select__option-selected {
	color: #F78408;
}



._error{
	color: #ed3232;
}

._arrow-down {
/* content: ""; */
position: relative;
/* background: url(../assets/icons/arrow-down-black.svg) no-repeat; */
width: 11px;
height: 7px;
display:flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease 0s;
transform: rotate(0deg);
}
._arrow-down_active {
transform: rotate(180deg);
}
._arrow-down_active path{
	fill:#F78408;
}

/* animation-select start */
.animation-select-enter-active{
transition: all 0.3s ease 0s;
}

.animation-select-enter-from {
opacity:0;
}
.animation-select-enter-to {
opacity:1;
}
/* animation-select end*/



/* animation-main-blocks*/
.about-enter-active,
.about-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.about-enter-from,
.about-leave-to {
  opacity: 0;
}
.category-enter-active,
.category-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.category-enter-from,
.category-leave-to {
  opacity: 0;
}
.rubric-enter-active,
.rubric-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.rubric-enter-from,
.rubric-leave-to {
  opacity: 0;
}
.dish-enter-active,
.dish-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.dish-enter-from,
.dish-leave-to {
  opacity: 0;
}

/* animation-main-blocks*/

/* 
.ui__wrapper{
	 flex: 1 1 100%;
    display: flex;
    align-items: flex-end;
	
} */

</style>
