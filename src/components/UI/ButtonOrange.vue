<template>
		<div class="ui__wrapper">
						<button  
							class="ui__button-orange" 							
						>
						<slot></slot></button>
		</div>
</template>

<script>
export default {
	name: 'button-orange',
}
</script>

<style>

.ui__button-orange {
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
</style>