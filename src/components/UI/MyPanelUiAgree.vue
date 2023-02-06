<template>
	<div class="ui__fixed-wrapper">
		<div   class="ui__buttons">			
			<div class="ui__buttons-panel buttons-panel">
				<div class="buttons-panel__top">
					<div class="buttons-panel__title">Предпросмотр меню</div>
					<button @click="$router.back()" class="buttons-panel__cancel">Закрыть</button>
				</div>
				<div class="buttons-panel__bottom">
					<button @click="$router.push(`/result`)" class="buttons-panel__button">
						
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.7099 1.21001C14.617 1.11628 14.5064 1.04189 14.3845 0.991122C14.2627 0.940353 14.132 0.914215 13.9999 0.914215C13.8679 0.914215 13.7372 0.940353 13.6154 0.991122C13.4935 1.04189 13.3829 1.11628 13.29 1.21001L5.83995 8.67001L2.70995 5.53001C2.61343 5.43677 2.49949 5.36346 2.37463 5.31426C2.24978 5.26505 2.11645 5.24092 1.98227 5.24324C1.84809 5.24557 1.71568 5.27429 1.5926 5.32779C1.46953 5.38128 1.35819 5.45849 1.26495 5.55501C1.17171 5.65154 1.0984 5.76548 1.04919 5.89033C0.999989 6.01519 0.975859 6.14851 0.97818 6.28269C0.980502 6.41687 1.00923 6.54928 1.06272 6.67236C1.11622 6.79544 1.19343 6.90677 1.28995 7.00001L5.12995 10.84C5.22291 10.9337 5.33351 11.0081 5.45537 11.0589C5.57723 11.1097 5.70794 11.1358 5.83995 11.1358C5.97196 11.1358 6.10267 11.1097 6.22453 11.0589C6.34639 11.0081 6.45699 10.9337 6.54995 10.84L14.7099 2.68001C14.8115 2.58637 14.8925 2.47272 14.9479 2.34622C15.0033 2.21972 15.0319 2.08312 15.0319 1.94501C15.0319 1.80691 15.0033 1.67031 14.9479 1.54381C14.8925 1.41731 14.8115 1.30366 14.7099 1.21001Z" fill="#F78408"/>
						</svg>

						<span>Выбрать этот дизайн</span>
					</button>									
				</div>

			</div>								
		</div>	
	</div>			
</template>

<!-- <script setup>
import {useRoute, useRouter} from "vue-router"
import {onMounted,ref} from "vue"
import cars from "../data.json"
const route = useRoute()
const router = useRouter()
const car = ref(null)
const {id} = route.params
onMounted(() => {
   const c = cars.find(c => c.id === parseInt(id));
   car.value = c
})
</script> -->




<script>

export default {
	props: {
		
		theme:{
			type: Object,
			required: true,
		},
		
	},
	data() {
	return { 
		openUi: false
		
	}
  },


  
	methods: {
	

  },
}
</script>

<style scoped>



.ui__fixed-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
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
  height: 109px;
  max-width: 600px;
  margin: 0 auto;
  
}
/* .ui__buttons._active {
	height:150px;
} */



.buttons-panel__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.buttons-panel__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.buttons-panel__cancel {
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
  opacity: 0.8;
  padding: 7px 0;
}
.buttons-panel__bottom {
  display: flex;
  justify-content: space-between;
}
.buttons-panel__button {
  display: flex;
  min-width:77px;
  align-items: center;
  /* margin: 0 15px; */
}

.buttons-panel__button svg {
  margin-right: 9px;
}
.buttons-panel__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
  -moz-user-select: -moz-none;
-o-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
}

</style>