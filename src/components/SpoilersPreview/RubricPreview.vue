							<template>
		<div  class="main-preview-rubrics__block" >						
							<div  
							@click="toggleBlock"
							v-touch:longtap="longtapHandler"
							v-touch="touchHandler"
							class="main-preview-rubrics__header" 
							:class="{_focus: uiVisible, _drag_item: draggableRubric}">
								<div class="main-preview-rubrics__label _label">
									
								<div>
									<span class="main-preview-categories__label-item label-block">Рубрики</span>
									<div v-if="locale != 'ru'" class="label-block__label-wrapper">
										<span 
										v-if="rubric.label[locale] == rubric.label.ru && rubric.text[locale] == rubric.text.ru"
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
								<div class="main-preview-rubrics__title _title" :class="{ '_arrow-visible': rubric.dishs.length > 0 ,'_active': uiVisible, '_toggle': toggleShow && !draggableRubric }">{{ rubric.label[locale] }}</div>
								<transition name="ui">
									<div v-show="!draggableRubric && !draggableDish">
										<div  class="main-preview-rubrics__text _text">{{ rubric.text[locale] }}</div>
													<div  v-if="this.rubric.img.length != 0" class="main-preview-rubrics__image _ibg">
														<img v-bind:src="(`${rubric.img}`)" alt="">
													</div>
									</div>
								</transition>
							</div>
							<div class="_wrapper-body">
							<transition name="show-block">
								<div v-show="draggableDish || (toggleShow && !draggableRubric)">
						
							<draggable
						class="list-group"
						:list="rubric.dishs"
						:disabled="!draggableDish"
						group="dishs"
						itemKey="value"
						>
							<template #item="{ element }">
								<div class="list-group-item">
									<DishPreview 
									:draggableDish="draggableDish"
									:dish="element"
									:rubric="rubric"
									:category="category"
									:locale="locale"
									@removedish="$emit('removedish',  element)"
									@seeEditingDish="$emit('seeEditingDish', element)"
									@longtapHandlerDish="longtapHandlerDish"
									@touchHandlerDish="touchHandlerDish"
									/>
					         </div>
							</template>
						</draggable>
							</div>
						   </transition>
						   </div>
							<!-- ui panel  -->
							<MyPenelUiRubric 
							v-model:showUi="uiVisible"
							:rubric="rubric"
							:category="category"
							:locale="locale"
							@removerubric="$emit('removerubric', rubric)"
							@seeEditingDish="$emit('seeEditingDish')"
							@seeEditingRubric="$emit('seeEditingRubric', rubric)"
							/>
                     <!-- ui panel  -->  

						</div>	
					
</template>

<script>
import MyPenelUiRubric from  '@/components/UI/MyPenelUiRubric.vue'
import DishPreview from  '@/components/SpoilersPreview/DishPreview.vue'
import draggable from 'vuedraggable'

export default {
	props: {
		draggableRubric: {
			type: Boolean
		},
		draggableDish: {
			type: Boolean
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

	// emits: ['removerubric, removedish'],
	data(){
		return {
			isFocus: false,
			uiVisible:false,
			toggleShow: false,
			enabled: false,
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
			this.$emit('longtapHandlerRubric')
			this.$emit('draggableUnTuchDish')
		},
		touchHandler(){
			this.$emit('touchHandlerRubric')
		},
		longtapHandlerDish(mouseEvent){
			this.$emit('draggableTuchDish')
			this.enabled = true	
		},
		touchHandlerDish(){
			this.$emit('draggableUnTuchDish')
			this.enabled = false	
		}			
	},
	components: {
		DishPreview,
		MyPenelUiRubric,
		draggable,
	},

}
</script>

<style>

</style>