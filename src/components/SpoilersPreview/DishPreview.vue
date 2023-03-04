<template>
<div  v-touch:longtap="longtapHandler"
		  v-touch="touchHandler"  class="main-preview-rubrics__body">
	   <div 
	    
		  ref="target" 
		  class="main-preview-dishs__block"  
		  :class="{_focus: uiVisible,  _drag_item: draggableDish}"
		  >
		<div  class="main-preview-dishs__header">
			<div class="main-preview-dishs__label _label">
				           
							<div>
								<span class="main-preview-categories__label-item label-block">Блюдо</span>
								<div v-if="locale != 'ru'" class="label-block__label-wrapper">
									<span 
									v-if="dish.label[locale] == dish.label.ru && dish.text[locale] == dish.text.ru"
									class="label-block__label-status">Необходимо перевести</span>
									<span 
									v-else
									class="label-block__label-status label-block__label-status_green">Переведено</span>
								</div>
							</div>   
							<button @click="showUi" class="buttons-panel__сorrect" >
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M17.3333 5.03334C17.3339 4.92367 17.3129 4.81495 17.2715 4.71342C17.23 4.61188 17.1689 4.51954 17.0916 4.44167L13.5583 0.908337C13.4804 0.831103 13.3881 0.769998 13.2866 0.728528C13.185 0.687057 13.0763 0.666036 12.9666 0.66667C12.857 0.666036 12.7482 0.687057 12.6467 0.728528C12.5452 0.769998 12.4528 0.831103 12.375 0.908337L10.0166 3.26667L0.908307 12.375C0.831072 12.4529 0.769968 12.5452 0.728497 12.6467C0.687027 12.7483 0.666006 12.857 0.66664 12.9667V16.5C0.66664 16.721 0.754437 16.933 0.910718 17.0893C1.067 17.2455 1.27896 17.3333 1.49997 17.3333H5.03331C5.14991 17.3397 5.26655 17.3214 5.37566 17.2798C5.48476 17.2382 5.5839 17.1741 5.66664 17.0917L14.725 7.98334L17.0916 5.66667C17.1677 5.5859 17.2297 5.49295 17.275 5.39167C17.283 5.32525 17.283 5.2581 17.275 5.19167C17.2789 5.15288 17.2789 5.1138 17.275 5.075L17.3333 5.03334ZM4.69164 15.6667H2.33331V13.3083L10.6083 5.03334L12.9666 7.39167L4.69164 15.6667ZM14.1416 6.21667L11.7833 3.85834L12.9666 2.68334L15.3166 5.03334L14.1416 6.21667Z" fill="#828282"/>
										</svg>
							</button>
			</div>
			<div class="main-preview-dishs__info-main">
				<div class="main-preview-dishs__title _title" :class="{_active: uiVisible}">{{ dish.label[locale] }}</div>
				<div class="main-preview-dishs__price _title">{{ dish.price }}</div>
			</div>										
		</div>
		<div v-show="!draggableDish">
		<div class="_wrapper-body">
		<transition name="show-block">
		<div v-show="toggleShow" class="main-preview-dishs__description">
			<div class="main-preview-dishs__text _text">{{ dish.text[locale] }}</div>
			<div class="main-preview-dishs__weight _label _weight">{{ dish.weight }}</div>	
			<div  v-if="this.dish.img.length != 0" class="main-preview-dishs__image _ibg">
											<img v-bind:src="(`${dish.img}`)" alt="">
			</div>
			<div  class="main-preview-dishs__slider-wrapper">
				<MySlider 
				:images="dish"
				/>
			</div>		
		</div>
	   </transition>
		</div>
		<div @click="toggleBlock" class="main-preview-dishs__button-more _label" :class="{'_toggle': toggleShow }">
			<span v-if="toggleShow">Свернуть описание</span>
			<span v-else>Подробное описание</span>
		</div>
		</div>
	</div>
		<!-- ui panel  -->
							<MyPenelUiDish
							v-model:showUi="uiVisible" 
							:dish="dish"
							:rubric="rubric"
							:category="category"
							:locale="locale"
							@removedish="$emit('removedish', dish)"
							@seeEditingDish="$emit('seeEditingDish', dish)"
							/>
                     <!-- ui panel  -->  

</div>
</template>


<script>
import MyPenelUiDish from  '@/components/UI/MyPenelUiDish.vue'
import MySlider from '@/components/UI/MySlider.vue'
export default {
	props: {
		draggableDish: {
			type: Boolean,
		},
		dish:{
			type: Object,
			required: true,
		},
		rubric:{
			type: Object,
			required: true,
		},
		category:{
			type: Object,
			required: true,
		},
		locale: {
		type: [String, Number],
		required: true },
	},
	
	emits: ['removedish','longtapHandlerDish','touchHandlerDish'],
	data(){
		return {
			isFocus: false,
			uiVisible:false,
			toggleShow: false,
		}
	},
	methods: {
		showUi(){
			this.uiVisible = true
			
		},
		getFocus(){
		
			this.isFocus = true
		},
		toggleBlock(){
		if(this.toggleShow == true){
			this.toggleShow = false
		}else{
			this.toggleShow = true
		}
	  },
	  longtapHandler(mouseEvent){
			this.$emit('longtapHandlerDish')
		},
		touchHandler(){
			this.$emit('touchHandlerDish')
		}
	},
	components: {
		MySlider,
		MyPenelUiDish,
	}
}
</script>

<style>

</style>