<template>
	<textarea 
	:value="modelValue" 
	@input="updateInput" 
	:maxlength="limit"
	class="box-input__input" 
	:placeholder="placeholder"
	name="content" 								
	v-bind="$attrs"
	>
	</textarea>
	<span class="box-input__counter-text counter-text">
		<span class="counter-text__current">{{counter}}</span>
	</span>
</template>


<script>
export default {
	name: 'my-textarea',
	props: {
		modelValue: [ String, Number],
		limit: Number,
		placeholder: [ String, Number],
	},
	date(){
		return {
			
		}
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		},
		clickAtr(){
			console.log(this.$attrs)
		}
	},
	computed: {
		counter() {
			if (this.modelValue == undefined) {
				return `0/${this.limit}`
			} else {
				return `${this.modelValue.length}/${this.limit}`
			
			}
			// return `${this.modelValue.length}/${this.limit}`
		}
	},

	mounted(){
		
	
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

textarea.box-input__input {
  resize: vertical;
  min-height: 120px;
}
</style>