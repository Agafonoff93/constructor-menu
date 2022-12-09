	<template>
		<div class="select">
		<Listbox >
		<ListboxButton
		class="select__button"
		>Родительская категория</ListboxButton>
		<transition
		
			name="animation-select"
			>
				<ListboxOptions
				class="select__options">
					<ListboxOption
						v-slot="{ active, selected }"
						class="select__option"
						:class="[
							active ? 'herna' : 'bla',
							'mb-stutic',
						]"
						v-for="category in props.categorys" 
						:key="category.id"  
						:category="category"
						
					>
					<span
							:class="[
							selected ? 'font-medium' : 'font-normal',
							'stutic-css',
							]"
							>{{ category.title }}</span>
							<span
							v-if="selected"
							class="_icon-css"
						>
						
						</span>
						
						
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</Listbox>
	</div>
	</template>
	


	<script setup>
		import { ref } from 'vue'
		import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		} from '@headlessui/vue'
	

		const props = defineProps({
			categorys: {
				type: Array,
				required: true,
			},
			modelValue: [String, Number]

	})
		const form = ref({
			person_id: null
		})
		// categorys = [
		//   { id: 1, name: 'Durward Reynolds', unavailable: false },
		//   { id: 2, name: 'Kenton Towne', unavailable: false },
		//   { id: 3, name: 'Therese Wunsch', unavailable: false },
		//   { id: 4, name: 'Benedict Kessler', unavailable: true },
		//   { id: 5, name: 'Katelyn Rohan', unavailable: false },
		// ]
		// const people = [
		//   { id: 1, name: 'Durward Reynolds', unavailable: false },
		//   { id: 2, name: 'Kenton Towne', unavailable: false },
		//   { id: 3, name: 'Therese Wunsch', unavailable: false },
		//   { id: 4, name: 'Benedict Kessler', unavailable: true },
		//   { id: 5, name: 'Katelyn Rohan', unavailable: false },
		// ]
		// const selectedTitle = ref(category.title)
	// 	const selectedTitle = ref(props.categorys)

	</script>