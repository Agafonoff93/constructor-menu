<template>
 <div class="result _container">
	<div class="result__block">
		<div class="result__title _bold-light">
			Отлично! Ваше меню создано!
		</div>
		<div class="result__item href-result">
			<div class="href-result__label _label">
				Ссылка на меню
			</div>
			<div class="href-result__link">
				<span ref="copyTarget">{{ templateUrl ? `${templateUrl}` : 'Что-то пошло не так, вернитесь назад' }}</span>
			</div>
		</div>	
		<div class="result__item _text">
			<p>Теперь меню доступной по этой ссылке. Скопируйте её и разместите на сайте или поделитесь с клиентами.</p>
		</div>	
			
		<Popover class="result__item">
				<PopoverButton
				
				>		
				<button
				@click="copyToClipboard"
				class="result__button"
				>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.00008 15.55L6.23008 17.27C5.76595 17.7341 5.13646 17.9949 4.48008 17.9949C3.8237 17.9949 3.19421 17.7341 2.73008 17.27C2.26595 16.8059 2.00521 16.1764 2.00521 15.52C2.00521 14.8636 2.26595 14.2341 2.73008 13.77L7.27008 9.22C7.71569 8.77294 8.3161 8.51428 8.94709 8.49753C9.57809 8.48078 10.1914 8.70722 10.6601 9.13L10.7801 9.23C10.9697 9.41565 11.2253 9.51837 11.4907 9.51556C11.7561 9.51275 12.0094 9.40463 12.1951 9.215C12.3807 9.02537 12.4835 8.76976 12.4806 8.5044C12.4778 8.23903 12.3697 7.98565 12.1801 7.8C12.1236 7.72703 12.0636 7.65694 12.0001 7.59C11.1464 6.84732 10.0424 6.45685 8.91165 6.4977C7.78088 6.53855 6.70791 7.00766 5.91008 7.81L1.31008 12.36C0.528437 13.2108 0.105701 14.3307 0.130155 15.4858C0.154609 16.6408 0.624362 17.7418 1.44131 18.5588C2.25826 19.3757 3.35924 19.8455 4.51433 19.8699C5.66941 19.8944 6.78929 19.4716 7.64008 18.69L9.37008 17C9.5409 16.8137 9.6348 16.5695 9.63289 16.3167C9.63098 16.064 9.5334 15.8213 9.35979 15.6375C9.18618 15.4538 8.94942 15.3426 8.69715 15.3264C8.44488 15.3101 8.19582 15.39 8.00008 15.55ZM18.6901 1.31C17.8489 0.47401 16.7111 0.00479126 15.5251 0.00479126C14.3391 0.00479126 13.2013 0.47401 12.3601 1.31L10.6301 3C10.4593 3.18635 10.3654 3.43048 10.3673 3.68327C10.3692 3.93606 10.4668 4.17874 10.6404 4.36249C10.814 4.54624 11.0507 4.65742 11.303 4.67365C11.5553 4.68989 11.8043 4.60998 12.0001 4.45L13.7301 2.73C14.1942 2.26587 14.8237 2.00513 15.4801 2.00513C16.1365 2.00513 16.766 2.26587 17.2301 2.73C17.6942 3.19413 17.955 3.82363 17.955 4.48C17.955 5.13638 17.6942 5.76587 17.2301 6.23L12.6901 10.78C12.2445 11.2271 11.6441 11.4857 11.0131 11.5025C10.3821 11.5192 9.76879 11.2928 9.30008 10.87L9.18008 10.77C8.99045 10.5844 8.73484 10.4816 8.46947 10.4844C8.20411 10.4873 7.95073 10.5954 7.76508 10.785C7.57943 10.9746 7.47671 11.2302 7.47952 11.4956C7.48234 11.761 7.59045 12.0144 7.78008 12.2C7.85272 12.2743 7.92951 12.3444 8.01008 12.41C8.86476 13.1505 9.96831 13.5395 11.0984 13.4986C12.2285 13.4578 13.3011 12.9902 14.1001 12.19L18.6501 7.64C19.4914 6.80408 19.9678 5.66923 19.9753 4.48325C19.9828 3.29727 19.5208 2.15649 18.6901 1.31Z" fill="#F78408"/>
					</svg>
					<span class="_bold-600-light">
						Скопировать ссылку
					</span>
				</button>			
					
				</PopoverButton>
				<transition name="popup-transition">
				<PopoverPanel>
					<div class="result__pop-up-wrapper">
						<div class="result__pop-up-content">
							<span>Ссылка скопирована!</span>
						</div>
				   </div>
				</PopoverPanel>
			</transition>
			</Popover>
	</div>

	<div class="result__block">
		<div class="result__item href-result">
			<div class="href-result__label _label">
				QR-код
			</div>
			<div class="href-result__qr-code _ibg">
				<img src="@/assets/image-qr/example-qr-code.svg" alt="qr-code">
			</div>
		</div>	
		<div class="result__item _text">
			<p>Теперь меню доступной по этой ссылке. Скопируйте её и разместите на сайте или поделитесь с клиентами.</p>
		</div>	
		<button class="result__button">
			<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15 18H1C0.734784 18 0.48043 18.1054 0.292893 18.2929C0.105357 18.4804 0 18.7348 0 19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19C16 18.7348 15.8946 18.4804 15.7071 18.2929C15.5196 18.1054 15.2652 18 15 18ZM7.29 15.71C7.3851 15.801 7.49725 15.8724 7.62 15.92C7.7397 15.9729 7.86913 16.0002 8 16.0002C8.13087 16.0002 8.2603 15.9729 8.38 15.92C8.50275 15.8724 8.6149 15.801 8.71 15.71L12.71 11.71C12.8983 11.5217 13.0041 11.2663 13.0041 11C13.0041 10.7337 12.8983 10.4783 12.71 10.29C12.5217 10.1017 12.2663 9.99591 12 9.99591C11.7337 9.99591 11.4783 10.1017 11.29 10.29L9 12.59V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V12.59L4.71 10.29C4.61676 10.1968 4.50607 10.1228 4.38425 10.0723C4.26243 10.0219 4.13186 9.99591 4 9.99591C3.86814 9.99591 3.73757 10.0219 3.61575 10.0723C3.49393 10.1228 3.38324 10.1968 3.29 10.29C3.19676 10.3832 3.1228 10.4939 3.07234 10.6158C3.02188 10.7376 2.99591 10.8681 2.99591 11C2.99591 11.1319 3.02188 11.2624 3.07234 11.3842C3.1228 11.5061 3.19676 11.6168 3.29 11.71L7.29 15.71Z" fill="#F78408"/>
			</svg>

			<span class="_bold-600-light">
				Скачать QR-код
			</span>
		</button>	
		
	</div>
 </div>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>


<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	methods: {
    async copyToClipboard() {
      const text = this.$refs.copyTarget.innerText;
      try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  },
	computed: {
	...mapState({
		templateUrl: state => state.user.templateUrl,
		userId: state => state.user.userId,
	
	}),
	...mapGetters({

	})
  },

}
</script>

<style scoped>

.result {
	margin-top: 30px;
	margin-bottom: 45px;
}

.result__block {
	margin-bottom: 30px;
}
.result__title {
	margin: 0 0 25px 0;
}
.result__item {
	margin-bottom: 12px;
}
.href-result {
}
.href-result__label {
	margin: 0 0 10px 0;
}

.href-result__link {
	border: 1px solid #BDBDBD;
	border-radius: 10px;
	padding: 11px 9px;
	word-wrap: break-word;
	width: 100%;
	min-height: 40px;
}
.href-result__link span{
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #828282;
}
.result__button {
}
.href-result__qr-code {

	padding: 0 0 73% 0;
	max-width: 250px;
}
.href-result__qr-code img {
	object-fit: contain;
}


.result__button {
}

.result__pop-up-wrapper {
	z-index: 100;
  padding: 30px 10px;
  position: fixed;
  bottom: 40px;
  left: 0;
  width: 100%;
  /* height: 100%; */
  pointer-events: none;
}











.result__pop-up-content {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;

	-webkit-box-flex: 1;
			-ms-flex: 1 1 auto;
				flex: 1 1 auto;
	width: 100%;
	max-width: 500px;
	padding:10px 15px 10px 15px;
	display: flex;
	-webkit-box-pack: center;
			-ms-flex-pack: center;
		justify-content: center;
		background: #FFFFFF;
		box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
	z-index: 150;
	position: relative;
	color: #219653;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
}





/* animation */

.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: opacity 0.5s ease;
}

.popup-transition-enter-from,
.popup-transition-leave-to {
  opacity: 0;
}
</style>