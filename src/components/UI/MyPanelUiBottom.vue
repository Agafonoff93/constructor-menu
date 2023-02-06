<template>
	<div 

	>
	<div  class="ui__container _container ">
							
							<div class="ui__fixed-wrapper">
								<div   class="ui__buttons">
									<div  class="ui__button-choose">		
											<slot></slot>
								   </div>
								</div>
							
							</div>
						</div>
					</div>
</template>

<script>

export default {
	props: {
		
		// uiMainVisible: {
		// 	type:Boolean,
		// 	default:false
		// },
		
	},
	data() {
	return { 
	
		
	}
  },


  
	methods: {
	
	
  },
}
</script>

<style scoped>

.ui__wrapper_transparent{
	position: absolute;
	margin-top: -70px;
   top: 0px;
   left: 0;
   width: 100%;
   height: 100%;
	/* background-color: #eb575780; */
	z-index: 5;
}
.ui__container {
  min-height: 50px;
  padding-bottom: 55px;
}
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
.ui__button {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
}
.ui__button img {
  margin-right: 9px;
}
.ui__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.ui__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  width: 100%;
  line-height: 15px;
  color: #EB5757;
}
.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 3;
  bottom: 0;
  left: 0;
}
.ui__buttons {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 15px 15px 20px 15px;
  visibility: visible;
  transition: all 0.3s ease 0s;
  height:55px;
  max-width: 600px;
  margin: 0 auto;
  
}
.ui__buttons._active {
	height:150px;
}

.ui__button-choose{
	display: flex;
	justify-content: space-between;
}
.ui__button-choose svg {
  margin-right: 9px;
}
.ui__button-choose span {
	font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #828282;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}
.ui__button-choose button {
	font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #333333;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}

</style>