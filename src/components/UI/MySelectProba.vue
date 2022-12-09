
 
 <template>
	<div class="select">
   
	  <Listbox 
	  :multiple="props.multiple"
	  @update:modelValue="value => emit('update:modelValue',value)"
	  :model-value="props.modelValue"
	  
	  >
		 <div class="">
			<div 
	 class="select__inactive" 
	 v-if="(props.options == null)"></div>
			<ListboxButton
			  class="select__button"
			  v-slot="{ open }"
			>
			  <span class="block truncate" v-if="label">{{ label }}</span>
			  <span v-else>{{ props.placeholder }}</span>
			  <span 
			  :class="[ open ? '_arrow-down_active' : '', '_arrow-down',  ]" 
			   >
					<svg width="8" height="6" viewBox="0 0 8 6" fill="none" >
					<path d="M7.75002 1.94251L4.53252 5.12251C4.4628 5.19281 4.37985 5.2486 4.28846 5.28668C4.19706 5.32476 4.09903 5.34436 4.00002 5.34436C3.90101 5.34436 3.80298 5.32476 3.71159 5.28668C3.6202 5.2486 3.53724 5.19281 3.46752 5.12251L0.287523 1.94251C0.217226 1.87279 0.16143 1.78984 0.123354 1.69844C0.0852773 1.60705 0.0656738 1.50902 0.0656738 1.41001C0.0656738 1.311 0.0852773 1.21297 0.123354 1.12158C0.16143 1.03018 0.217226 0.947234 0.287523 0.877511C0.428044 0.737823 0.618133 0.659417 0.816272 0.659417C1.01441 0.659417 1.2045 0.737823 1.34502 0.877511L4.00002 3.53251L6.65502 0.877511C6.79472 0.738953 6.98327 0.66084 7.18002 0.660011C7.27873 0.659441 7.37657 0.678359 7.46795 0.715683C7.55933 0.753006 7.64244 0.808 7.71252 0.877511C7.78533 0.944725 7.84409 1.0257 7.88542 1.11576C7.92675 1.20581 7.94983 1.30317 7.95332 1.40219C7.9568 1.50122 7.94063 1.59995 7.90574 1.6927C7.87085 1.78544 7.81792 1.87034 7.75002 1.94251Z" fill="#828282"/>
					</svg>
				</span>
			</ListboxButton>
 
			<transition
			  leave-active-class="transition duration-100 ease-in"
			  leave-from-class="opacity-100"
			  leave-to-class="opacity-0"
			>
			  <ListboxOptions
				 class="select__options"

			  >
				 <ListboxOption
					v-slot="{ active, selected }"
					v-for="option in props.options"
					:key="option.label"
					:value="option.value"
					as="template"
				 >
					<li
					  :class="[
						 active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
						 'select__option',
					  ]"
					>
					  <span
						 :class="[
							selected ? 'select__option-selected' : 'select__option-normal',
							'block truncate',
						 ]"
						 >{{ option.label }}</span
					  >
					
					</li>
				 </ListboxOption>
			  </ListboxOptions>
			</transition>
			<div class="_text _error" v-if="props.error && (props.options == null)">{{ props.error }}</div>
		 </div>
	  </Listbox>
	</div>
 </template>

 
 
<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
//  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'



const props = defineProps({
	options: Array,
	modelValue:[String, Number, Array],
	placeholder: {
		type: String,
		default: 'Select option'
	},
	multiple: Boolean,
	error: String,
	form: Object,
})

const emit = defineEmits(['update:modelValue']);

const label = computed(()=> {

		if(props.options != null){
		return props.options.filter(option => {
			if (Array.isArray(props.modelValue)){
				return props.modelValue.includes(option.value);

			}

			return props.modelValue === option.value;
		}).map(option => option.label).join(', ');
	}
})



 
</script>