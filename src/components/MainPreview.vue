<template>

	<div  style="flex:1 0 50%" class="page__main-preview main-preview">
		<div class="main-preview__container _container">
			<div class="main-preview__body">
			
				<div v-if="this.about.title || this.about.text || this.about.img != '' " class="main-preview__header main-preview-header">
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
				</div>
				<button v-else  class="main-preview__add-info ">
					<div class="main-preview__icon _icon-css">
						<span></span>
					</div>
					<div class="main-preview__text">
						<p>Добавьте информацию о ресторане!</p>
					</div>
				</button>
				<div  class="main-preview__categories main-preview-categories">
					<div v-if="categorys.length > 0" class="main-preview-categories__wrapper" data-spollers>
						<TransitionGroup name="list-category"  >
							<CategoryPreview  
							v-for="category in categorys" 
							:key="category.id"  
							:category="category"
							@remove="$emit('remove', category)"
							
					
						/>
						</TransitionGroup>
					
					</div>
					<div class="main-preview__add-block" v-else>
						<button  class="main-preview__create create">
							<div class="create__image">
								<div class="create__button _icon-css-lg">
									<span></span>
								</div>
							</div>
							<div class="create__title">Добавить элементы меню</div>
						</button> 
				   </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CategoryPreview from '@/components/SpoilersPreview/CategoryPreview.vue'

export default {
props: {
  
	about: {
		type: Object,
		required: true
	},
	categorys: {
		type: Array,
		required: true
	},
 
},


components:{
	CategoryPreview
},
methods:{
   
},

 mounted() {
    console.log(this.about) // I'm text inside the component.
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

.main-preview__add-info {
display: flex;
align-items: center;
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
}
.main-preview-categories__header._active .main-preview-categories__title::after {
transform: rotate(180deg);
}
.main-preview-categories__label {
margin-bottom: 2px;
}
.main-preview-categories__title {
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
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
.main-preview-rubrics__header._active .main-preview-rubrics__title::after {
transform: rotate(180deg);
}
.main-preview-rubrics__label {
margin-bottom: 2px;
}
.main-preview-rubrics__title {
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
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
.main-preview-dishs__header._active .main-preview-dishs__button-more::after {
transform: rotate(180deg);
}
.main-preview-dishs__label {
margin-bottom: 2px;
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
margin: 10px 0;
padding: 0 0 74% 0;
}
.main-preview-dishs__image img {
border-radius: 5px;
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

._title {
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #333333;
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

</style>