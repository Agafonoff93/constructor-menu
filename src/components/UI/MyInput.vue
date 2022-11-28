<template>
	<input 
	:value="modelValue" 
	@input="updateInput" 
	class="box-input__input"  
	type="text"
	:maxlength="limit"
	>
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number],
		limit: Number,
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style>
.box-input__wrapper {
  position: relative;
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