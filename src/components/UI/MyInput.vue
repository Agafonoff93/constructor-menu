<template>
	
	<input 
	:value="modelValue" 
	@input="updateInput" 
	class="box-input__input"  
	type="text"
	:maxlength="limit"
	:placeholder="placeholder"
	v-bind="$attrs"
	>
	
	<span class="box-input__counter-text counter-text counter-text_align">
		{{ meaning }}
	</span>
	
</template>

<script>

export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number,Array,Object],
		limit: Number,
		meaning:  [String, Number,Array,Object],
		placeholder:[String, Number],
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		},
		
	},
	mounted(){
	
	}
}
</script>

<style>
.box-input__wrapper {
  position: relative;
  flex: 1 1 100%;
}
.box-input__wrapper-pair {
	display: flex;
	gap:15px;
}
.box-input__input {
  padding: 11px 9px;
  width: 100%;
  border: 1px solid #BDBDBD;
  border-radius: 10px;
  color: #333333;
}
.box-input__input::placeholder {
  color: #828282;
}


</style>