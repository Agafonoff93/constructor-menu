<template>

	<div  class="page__main-preview main-preview">
		<div class="main-preview__container _container">
			<div class="main-preview__body">
				<div v-if="!isUserLoading" class="main-preview__about-wrapper">
					<button @click="seeEditingAbout" v-if="categories.length > 0 && about.title == '' &&  about.text == '' &&  about.img  == ''"  class="main-preview__add-info ">
						<div class="main-preview__icon _icon-css">
							<span></span>
						</div>
						<div class="main-preview__text">
							<p>Добавьте информацию о ресторане!</p>
						</div>
					</button>
					<div v-else-if="about.title || about.text || about.img != '' " class="main-preview__header main-preview-header">
						<div v-if="this.about.img.length != 0" class="main-preview-header__logo">
							<img v-bind:src="(`${about.img}`)" alt="">
						
						</div>
						<div 
						class="main-preview-header__title _title"
						
						>
							{{about.title}}
						</div>
						<div class="main-preview-header__text _text">
							{{about.text}}
						</div>
						<div class="main-preview-header__editing">
							<button  @click="seeEditingAbout" class="main-preview-header__editing-btn">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.3333 5.03334C17.3339 4.92367 17.3129 4.81495 17.2715 4.71342C17.23 4.61188 17.1689 4.51954 17.0916 4.44167L13.5583 0.908337C13.4804 0.831103 13.3881 0.769998 13.2866 0.728528C13.185 0.687057 13.0763 0.666036 12.9666 0.66667C12.857 0.666036 12.7482 0.687057 12.6467 0.728528C12.5452 0.769998 12.4528 0.831103 12.375 0.908337L10.0166 3.26667L0.908307 12.375C0.831072 12.4529 0.769968 12.5452 0.728497 12.6467C0.687027 12.7483 0.666006 12.857 0.66664 12.9667V16.5C0.66664 16.721 0.754437 16.933 0.910718 17.0893C1.067 17.2455 1.27896 17.3333 1.49997 17.3333H5.03331C5.14991 17.3397 5.26655 17.3214 5.37566 17.2798C5.48476 17.2382 5.5839 17.1741 5.66664 17.0917L14.725 7.98334L17.0916 5.66667C17.1677 5.5859 17.2297 5.49295 17.275 5.39167C17.283 5.32525 17.283 5.2581 17.275 5.19167C17.2789 5.15288 17.2789 5.1138 17.275 5.075L17.3333 5.03334ZM4.69164 15.6667H2.33331V13.3083L10.6083 5.03334L12.9666 7.39167L4.69164 15.6667ZM14.1416 6.21667L11.7833 3.85834L12.9666 2.68334L15.3166 5.03334L14.1416 6.21667Z" fill="#828282"/>
									</svg>
							</button>
						</div>
					</div>
					<div v-else class="main-preview__start-body start">
							<div class="start__title">Добро пожаловать в конструткор меню!</div>
							<div class="start__text">
								<p>Здесь Вы сможете создать электронное меню для своего заведения.</p>
								<p>Процесс создания меню состоит из двух этапов: заполнение позиций и выбор дизайна.</p>
								<p>Сейчас Вам предстоит добавить категории, рубрики и блюда. После того, как вы закончите,
									промотайте страницу вниз и нажмите кнопку <span>“Выбрать дизайн”</span>, чтобы перейти к выбору
									дизайна.</p>
							</div>
					</div>
			
				</div>
				<div v-else class="main-preview__about-loading">					
					<img src="@/assets/loading.gif" alt="loading">
				</div>
				<div  class="main-preview__categories main-preview-categories">
				
					<div 
					v-if="categories.length > 0" 
					class="main-preview-categories__wrapper" 
					>
						<draggable
							:list="categories"
							:disabled="!enabled"
							item-key="value"
							class="list-group"
							ghost-class="ghost"
							@start="dragging = true"
							@end="dragging = false"
							>
							<template #item="{ element }">
								<div class="list-group-item" :class="{ 'not-draggable': !enabled }">
									<CategoryPreview 
									:draggableCategory="draggable"
									:draggableRubric="draggableRubric"
									:draggableDish="draggableDish"
									:category="element" 
									@removecategory="$emit('remove', element)"
									@removerubric="$emit('removerubric', $event, element)"
									@removedish="(dish, rubric, category) => $emit('removemydish',dish, rubric, element)"
									ref="CategoryPreview"
									@seeEditingRubric="$emit('seeEditingRubric', $event, element)"
									@seeMyEditingDish="(dish, rubric, category) => $emit('seeEditingDish',dish, rubric, element)"
									@seeEditingCategory="$emit('seeEditingCategory', $event )" 
									@longtapHandlerCategory="longtapHandler"
									@touchHandlerCategory="touchHandler"
									@draggableTuchRubric="draggableTuchRubric"
									@draggableUnTuchRubric="draggableUnTuchRubric"
									@draggableTuchDish="draggableTuchDish"
									@draggableUnTuchDish="draggableUnTuchDish"
									/>
								</div>
							</template>
						</draggable>
						<!-- <TransitionGroup name="list-category"  >
							<CategoryPreview  
							v-for="category in categories" 
							:key="category.value"  
							:category="category"
							@remove="$emit('remove', category)"
							@removerubric="$emit('removerubric', $event, category)"
							@removedish="(dish, rubric, category) => $emit('removemydish',dish, rubric, category)"
							ref="CategoryPreview"
							@seeEditingRubric="$emit('seeEditingRubric', $event, category)"
							@seeMyEditingDish="(dish, rubric, category) => $emit('seeEditingDish',dish, rubric, category)"
							@seeEditingCategory="$emit('seeEditingCategory', $event )"
						/>
						</TransitionGroup> -->
					
					</div>
					<div 
					v-else
					class="main-preview__add-block" 
					>
						<button @click="$emit('seeEditingCategory')" class="main-preview__create create">
							<div class="create__image">
								<div class="create__button _icon-css-lg">
									<span></span>
								</div>
							</div>
							<div class="create__title">Начать создавать меню</div>
						</button> 
				   </div>
				</div>
			</div>
			<transition name="ui">
			<MyPanelUiMain 
			v-if="visibleMain"
			@openUiMain="openUiMain"
			:uiMainVisible="uiMainVisible"
			@hideUiMain="hideUiMain"
			@seeEditingCategory="$emit('seeEditingCategory')"
			@seeEditingRubric="$emit('seeEditingRubric')"
			@seeEditingDish="$emit('seeEditingDish')"
			/>
			</transition>
		</div>
	</div>
</template>

<script>
import CategoryPreview from '@/components/SpoilersPreview/CategoryPreview.vue'
import MyPanelUiMain from '@/components/UI/MyPanelUiMain.vue'
import draggable from 'vuedraggable'


export default {
props: { 
	about: {
		type: Object,
		required: true
	},
	categories: {
		type: Array,
		required: true
	},
	isFocus: Boolean,
	
	visibleMain: {
		type: Boolean,
		default: true
	},
	isUserLoading: {
		type: Boolean,
		default: true
	},
	

},
data() {
	return {
		uiMainVisible:false,
		drag: false,
		draggable: false,
		draggableRubric: false,
		draggableDish: false,
		enabled: false,
	}
},

components:{
	CategoryPreview,
	MyPanelUiMain,
	 draggable,

},
expose: ['hideUiMain'],
methods:{

   seeEditingAbout() {
		this.$emit('seeAbout')
	},
	openUiMain(){
	this.uiMainVisible = true
  },
  hideUiMain(){
	this.uiMainVisible = false
  },
  longtapHandler(mouseEvent){
	 this.draggable = true
	 this.enabled = true	
  },
  touchHandler(){
	this.draggable = false
	this.enabled = false	
  },
  draggableTuchRubric(){
	this.draggableRubric = true
  },
  draggableUnTuchRubric(){
	this.draggableRubric = false
  },
  draggableTuchDish(){
	this.draggableDish = true
  },
  draggableUnTuchDish(){
	this.draggableDish = false
  },

},


 mounted() {
   //  console.log(this.about) // I'm text inside the component.
	//  console.log('категории', category)
	//  console.log('категории', this.category)
  }

}








</script>

<style>
.main-preview__body {
}
.main-preview__add-info {
display: flex;
align-items: center;
margin-bottom: 15px;
}
.main-preview__add-block{
	text-align: center;
}

.main-preview__icon {
}

.main-preview__text {
color: #828282;
margin-left: 10px;
}
.main-preview__create {
}
.create {
}
.create__image {
}
.create__title {
}

.header__title._active{
	background-color: pink;
}

.main-preview__add-info {
display: flex;
align-items: center;
}

.main-preview__about-loading {
	display:flex;
	align-items: center;
	justify-content:center;
	min-height: 60px;
	width:100%;
}
.main-preview__about-loading img{
	height:20px;
	width:20px;
	
}

.main-preview-header__editing {
	position:absolute;
	top: 0;
	right:20%;
}
.main-preview-header__editing-btn{
	padding:7px;
}

.main-preview__text {
color: #828282;
margin-left: 10px;
}

.main-preview__header {
margin-bottom: 10px;
}
.main-preview-header {
text-align: center;
position: relative;
}
.main-preview-header__logo {
max-height: 60px;
max-width: 180px;
margin: 0 auto 10px auto;
position: relative;
padding: 0px 0px 18% 0px;
}
.main-preview-header__logo img {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
object-fit: contain;
}
.main-preview-header__title {
margin-bottom: 10px;
font-size: 16px;
}
.main-preview-header__text {
margin-bottom: 10px;
}

.main-preview-categories__block {
margin-bottom: 10px;
}
.main-preview-categories__header {
 padding: 8px 13px;		
background: #FFFFFF;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
border-radius: 5px;
border: 2px solid transparent;
transition: all 0.3s ease 0s;
}



.main-preview-categories__label {
margin-bottom: 2px;
display:flex;
justify-content:space-between;
}
.main-preview-categories__title {
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
transition: all 0.3s ease 0s;
}
.main-preview-categories__title._active{
	color: #F78408;
}
.main-preview-categories__title:not(:last-child) {
margin-bottom: 7px;
}


.main-preview-categories__title::after {
content: "";
position: relative;
background: url(../assets/icons/arrow-down-black.svg) no-repeat;
width: 11px;
height: 7px;
transition: all 0.3s ease 0s;
transform: rotate(0deg);
}
.main-preview-categories__title._toggle::after{
	transform: rotate(180deg);
}


.main-preview-rubrics__block {
display: flex;
flex-direction: column;
}
.main-preview-rubrics__header {
 padding: 8px 13px;
margin-left: 10px;
background: #FFFFFF;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
border-radius: 5px;
margin-top: 10px;
border: 2px solid transparent;
}

.main-preview-rubrics__label {
margin-bottom: 2px;
display:flex;
justify-content:space-between;
}
.main-preview-rubrics__title {
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
transition: all 0.3s ease 0s;
}
.main-preview-rubrics__title._active{
	color: #F78408;
}

.main-preview-rubrics__title:not(:last-child) {
margin-bottom: 7px;
}
.main-preview-rubrics__title::after {
content: "";
position: relative;
background: url(../assets/icons/arrow-down-black.svg) no-repeat;
width: 11px;
height: 7px;
transition: all 0.3s ease 0s;
transform: rotate(0deg);
}
.main-preview-rubrics__title._toggle::after{
	transform: rotate(180deg);
}

.main-preview-rubrics__text:not(:last-child) {
margin-bottom: 7px;
}
.main-preview-rubrics__image {
padding: 0 0 74% 0;
}
.main-preview-rubrics__image img {
border-radius: 5px;
}
.main-preview-dishs__block {
 padding: 8px 13px;
margin-left: 20px;
background: #FFFFFF;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
border-radius: 5px;
margin-top: 10px;
border: 2px solid transparent;
}


.main-preview-dishs__label {
margin-bottom: 2px;
display:flex;
justify-content:space-between;
}
.main-preview-dishs__title {
	transition: all 0.3s ease 0s;
}
.main-preview-dishs__title._active{
	color: #F78408;
}
.main-preview-dishs__info-main {
margin-bottom: 7px;
display: flex;
justify-content: space-between;
}
.main-preview-dishs__text {
margin-bottom: 5px;
}
.main-preview-dishs__image {
min-width:0;	
margin: 10px 0;
padding: 0 0 74% 0;
max-width: 100%;
display: block;
}
.main-preview-dishs__image img {
border-radius: 5px;
}

.main-preview-dishs__slider-wrapper{
	margin: 10px 0;
}
.swiper-slide {
	width: 100%;
}
.main-preview-dishs__slider {
 
}
.main-preview-dishs__slider-wrapper {
 overflow: hidden;

}
.swiper .swiper-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  display: flex;
  position: relative;
}
.mySlider .main-swiper-slide {
	width: 100%;
}

.main-preview-dishs__button-more {
display: flex;
align-items: center;
}
.main-preview-dishs__button-more::after {
margin-left: 5px;
content: "";
position: relative;
background: url(../assets/icons/arrow-down-small-grey.svg) no-repeat;
width: 7px;
height: 5px;
transition: all 0.3s ease 0s;
transform: rotate(0deg);
}
.main-preview-dishs__button-more._toggle::after{
	transform: rotate(180deg);
}
._title {
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #333333;
-moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
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

._rub:after {
content: "₽";
}

._weight:after {
content: "г";
}



._wrapper-body {
	overflow: hidden;
}


.list-category-enter-active,
.list-category-leave-active {
  background: transparent;
  transition: all 0.5s ease;
}
.list-category-enter-from,
.list-category-leave-to {
	background: transparent;
  opacity: 0;
  transform: translateX(30px);
}


/* animation-main-ui*/
.ui-move,
.ui-enter-active,
.ui-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.ui-enter-from,
.ui-leave-to {
  opacity: 0;
}

/* animation-main-ui*/

/* animation-main-show-block*/
.show-block-move,
.show-block-enter-active,
.show-block-leave-active {
  transition: all 0.5s ease-in-out;
}

.show-block-enter-from,
.show-block-leave-to {
  transform: translate(0px,-100%);
	opacity: 0;
}

/* animation-main-show-block*/

</style>