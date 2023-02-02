<template>

	<div class="wrapper">
		<header class="header">
			<div class="header__container _container">
				<div class="header__top">
					<div class="header__logo">
						<img src="img/logo-white.svg" alt="logo">
					</div>
					<div class="header__menu menu">

						<nav class="menu__body _container">
							<div class="menu__header-logo"><img src="img/logo-white.svg" alt="logo"></div>
							<ul data-spollers="768,max" class="menu__list">
								<div class="menu__select select">

									<div class="select__item">
										<div class="select__title" data-spoller>
											<div class="select__value _icon-arrow-down">
												<span class="current_language" data-key="0">
													<img src="img/icons/0.png" />RU
												</span>
											</div>
										</div>
										<div id="select__options" class="select__options">
											<div data-value="0" class="select__option" data-key="0">
												<img src="img/icons/0.png" />RU
											</div>
											<div data-value="1" class="select__option" data-key="1">
												<img src="img/icons/1.png" />IT
											</div>
											<div data-value="2" class="select__option" data-key="2">
												<img src="img/icons/2.png" />CH
											</div>
										</div>
									</div>

								</div>
								<li class="menu__item">
									<button class="menu__link category__title _icon-arrow-down" data-spoller
										type="button">Апперетивы</button>
									<ul class="menu__sub-list">
										<li class="menu__sub-item">
											<a href="#rup__title_cold-snacks"
												class="menu__sub-link rup__title _goto-block">Холодные закуски</a>
										</li>
										<li class="menu__sub-item">
											<a href="#rup__title_hot-snacks" class="menu__sub-link rup__title _goto-block">Горячие
												закуски</a>
										</li>

									</ul>
								</li>
								<li class="menu__item">
									<button class="menu__link category__title _icon-arrow-down" data-spoller
										type="button">Хинкали</button>
									<ul class="menu__sub-list">
										<li class="menu__sub-item">
											<a href="#item__title_boiled" class="menu__sub-link rup__title _goto-block">Варённые
												хинкали</a>
										</li>
										<li class="menu__sub-item">
											<a href="#item__title_fried" class="menu__sub-link rup__title _goto-block">Жареные
												хинкали</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
					<button type="button" class="icon-menu">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div class="header__bottom">
					<div class="header__title">Congrats!</div>
					<div class="header__text">Откройте грузинскую кухню заново! Лучшие шеф-повора Тбилиси, Кутаиси и Местии
						готовы провести Вас в мир кулинарии Сартавелло.</div>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container _container">
				<div class="page__title">Меню</div>
				<div class="page__category category">
					<div class="category__header-block">
						<div class="category__title">Апперетивы</div>
						<div class="category__text">Не тратьте время попусту, пока мы лепим хинкали.</div>
					</div>
					<div class="category__body rup">
						<div class="rup__header-block">
							<div class="rup__title rup__title_cold-snacks">Холодные закуски</div>
							<div class="rup__text">Свежие овощи, фрукты и сыры.</div>
							<div class="rup__image _ibg">
								<img src="img/foto-rup/cold.jpg" alt="image">
							</div>
						</div>
						<div class="rup__body">
							<div class="rup__item item">
								<div class="item__title">Рулетики из баклажанов с гранатом</div>
								<div class="item__text">Нежные рулетики из свежих баклажанов, с начиной из домашнего сыра и
									грецкого ореха, украшенные зернами граната.</div>
								<div class="item__info">
									<div class="item__price rub">320,00</div>
									<div class="item__weight">467 г</div>
								</div>

								<div class="item__box-slider box-slider">

									<div class="box-slider__slider swiper">

										<div class="box-slider__wrapper swiper-wrapper">
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-1.jpg" alt="image-slide">
												</div>
											</div>
										</div>

										<div class="box-slider__controls controls-slider-box">
											<div class="controls-slider-box__wrapper swiper-pagination"></div>
										</div>

									</div>

								</div>


							</div>
							<div class="rup__item item">
								<div class="item__title">Сациви</div>
								<div class="item__text">Нежные кусочки куринного филе в сметанном соусе со специями.</div>
								<div class="item__info">
									<div class="item__price rub">450,00</div>
									<div class="item__weight">521 г</div>
								</div>
								<div class="item__box-slider box-slider">

									<div class="box-slider__slider swiper">

										<div class="box-slider__wrapper swiper-wrapper">
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
											<div class="box-slider__slide swiper-slide">
												<div class="box-slider__image _ibg">
													<img src="img/foto-items/item-2.jpg" alt="image-slide">
												</div>
											</div>
										</div>

										<div class="box-slider__controls controls-slider-box">
											<div class="controls-slider-box__wrapper swiper-pagination"></div>
										</div>

									</div>

								</div>
							</div>

						</div>
					</div>
					<div class="category__body rup">
						<div class="rup__header-block">
							<div class="rup__title rup__title_hot-snacks">Горячие закуски</div>
							<div class="rup__text">Лёгкие мясные и сырные закуски.</div>
							<div class="rup__image _ibg">
								<img src="img/foto-rup/hot.jpg" alt="image">
							</div>
						</div>
						<div class="rup__body">
							<div class="rup__item item">
								<div class="item__title">Лёпешка с зеленью</div>
								<div class="item__text">Традиционное блюдо грузинских горцев. Свежий лаваш с начинкой из 14
									видов трав и специй.</div>
								<div class="item__info">
									<div class="item__price rub">140,00</div>
									<div class="item__weight">340 г</div>
								</div>
								<div class="item__image _ibg">
									<img src="img/foto-items/item-4.jpg" alt="image-slide">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="page__category category">
					<div class="category__header-block">
						<div class="category__title">Основные блюда</div>
						<div class="category__text">То, что обязательно нужно попробовать в грузинском ресторане.</div>
					</div>
					<div class="category__body rup">
						<div class="rup__header-block">
							<div class="rup__title">Хинкали</div>
							<div class="rup__text">Классика грузинской кухни. И помните, есть их можно только руками!</div>
							<div class="rup__image _ibg">
								<img src="img/foto-rup/hinkali.jpg" alt="image">
							</div>
						</div>
						<div class="rup__body">
							<div class="rup__item item">
								<div class="item__title item__title_boiled">Варённые хинкали</div>
								<div class="item__text">Традиционные хинкали с мясом баранины, свинины или говядины на выбор.
								</div>
								<div class="item__info">
									<div class="item__price rub">125,00</div>
									<div class="item__weight">118 г</div>
								</div>
								<div class="item__image _ibg">
									<img src="img/foto-items/item-5.jpg" alt="image-slide">
								</div>
							</div>
							<div class="rup__item item">
								<div class="item__title item__title_fried">Жареные хинкали</div>
								<div class="item__text">Те же хинкали, но с хрустящей корочкой. На выбор мясо баранины, свинины
									или говядины.</div>
								<div class="item__info">
									<div class="item__price rub">115,00</div>
									<div class="item__weight">109 г</div>
								</div>
								<div class="item__image _ibg">
									<img src="img/foto-items/item-6.jpg" alt="image-slide">
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>

		</main>
		<footer class="footer">
			<div class="footer__container _container">
				<div class="footer__box-btns">
					<!-- <button href="#subscription" class="footer__button _button _popup-link">Подписка на новости</button> -->
					<button href="#subscription" class="footer__button _button _popup-link">Получи месяц бесплатного
						использования после оценки</button>
				</div>
			</div>
		</footer>
	</div>




	<div class="popup popup_subscription">
		<div class="popup__content">
			<div class="popup__body _container">
				<div class="popup__close"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
						width="18" height="18" viewBox="0 0 18 18">
						<defs>
							<path id="avzva"
								d="M691.485 160.07l-1.414 1.415-7.071-7.071-7.071 7.071-1.414-1.414 7.07-7.071-7.07-7.071 1.414-1.415 7.07 7.071 7.072-7.07 1.414 1.414-7.07 7.07z" />
						</defs>
						<g>
							<g transform="translate(-674 -144)">
								<use fill="#212121" xlink:href="#avzva" />
							</g>
						</g>
					</svg> </div>
				<button href="#subscription" class="popup__button _button">Подписка на новости</button>
				<button href="#subscription" class="popup__button _button">Получи месяц бесплатного использования после
					оценки</button>
			</div>
		</div>
	</div>




	<!-- <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
	<script src="js/vendors.min.js"></script>
	<script src="js/vic.js"></script> -->

	
</template>

<script>

// import scriptTheme from scriptTheme 
export default{

}
</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Bitter:regular,600,700&display=swap&subset=cyrillic-ext);

* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

aside,
nav,
footer,
header,
section {
	display: block;
}

html {
	font-size: 14px;
}

html,
body {
	height: 100%;
	min-width: 320px;
}

body {
	line-height: 1;
	font-family: "Bitter";
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: "Bitter";
	font-size: inherit;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
	background-color: inherit;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

/*
&::-webkit-scrollbar {
	display: none;
}
*/
body {
	color: #333333;
}

body._lock {
	overflow: hidden;
}

.wrapper {
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	/* background: linear-gradient(0deg, rgba(255, 247, 235, 0.9), rgba(255, 247, 235, 0.9)), url(../img/bg-template-1.jpg) repeat 10%; */
}

._container {
	margin: 0 auto;
	max-width: 600px;
	padding: 0 10px;
}

.rub:after {
	content: "₽";
}

._ibg {
	position: relative;
}

._ibg img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}

body.ie ._ibg {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

body.ie ._ibg img {
	width: 0;
	height: 0;
	opacity: 0;
	visibility: hidden;
}

.swiper {
	overflow: hidden;
}

.swiper .swiper-wrapper {
	width: 100%;
	height: 100%;
	box-sizing: content-box;
	display: flex;
	position: relative;
}

.swiper.swiper-container-vertical .swiper-wrapper {
	flex-direction: column;
}

.swiper.swiper-container-autoheight .swiper-wrapper {
	align-items: flex-start;
}

.swiper-container-initialized .swiper-slide {
	flex-shrink: 0;
}

.swiper-container-android .swiper-slide,
.swiper-container-android .swiper-wrapper {
	transform: translate3d(0px, 0, 0);
}

.swiper-button-lock {
	display: none !important;
}

.header__container {
	margin-top: 10px;
}

.header__top {
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	margin-bottom: 20px;
	position: relative;
}

.header__title {
	font-weight: 600;
	font-size: 18px;
	line-height: 122%;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #333333;
}

.header__text {
	font-weight: 400;
	font-size: 14px;
	line-height: 122%;
	letter-spacing: 0.04em;
	color: #4F4F4F;
	margin-top: 5px;
}

.header__logo {
	width: 100%;
	max-width: 150px;
	max-height: 60px;
}

.header__logo img {
	width: 100%;
	max-width: 150px;
	max-height: 60px;
	object-fit: contain;
	object-position: left;
}

.icon-menu {
	display: flex;
	position: absolute;
	top: 18px;
	right: 10px;
	width: 25px;
	height: 18px;
	cursor: pointer;
	z-index: 15;
}

.icon-menu span {
	transition: all 0.3s ease 0s;
	top: calc(50% - 2px);
	left: 16px;
	position: absolute;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: #333333;
}

.icon-menu span:first-child {
	top: 0px;
}

.icon-menu span:last-child {
	top: auto;
	bottom: 0px;
}

.icon-menu._active span {
	left: 7px;
	transform: scale(0);
	border-radius: 0px;
}

.icon-menu._active span:first-child {
	transform: rotate(-45deg);
	top: calc(50% - 2px);
	width: 100%;
	height: 3px;
}

.icon-menu._active span:last-child {
	transform: rotate(45deg);
	bottom: calc(50% - 1px);
	width: 100%;
	height: 3px;
}

.menu {
	flex: 0 1 420px;
}

.menu__body {
	z-index: 5;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: auto;
	top: 0;
	left: -100%;
	/* background: linear-gradient(0deg, rgba(255, 247, 235, 0.9), rgba(255, 247, 235, 0.9)), url(../img/bg-template-1.jpg) repeat 10%; */
	transition: left 0.3s ease 0s;
	padding: 100px 20px 30px 10px;
}

.menu__body::before {
	content: "";
	position: fixed;
	width: 100%;
	height: 50px;
	top: 0;
	left: 100%;
	transition: all 0.3s ease 0s;
	z-index: 2;
}

.menu__body._active {
	left: 0;
}

.menu__body._active::before {
	left: 0;
}

.menu__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0px 0px 15px 0px;
	padding: 5px 0px;
	position: relative;
}

.menu__item:last-child {
	margin-bottom: 0;
}

.menu__link {
	font-weight: 500;
	color: inherit;
	transition: color 0.3s ease 0s;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	font-size: 24px;
	font-weight: 600;
}

.menu__link._active .menu__arrow {
	transform: rotate(-180deg);
}

.menu__arrow {
	margin: 0px 0px 0px 8px;
	transition: all 0.3s ease 0s;
	font-size: 8px;
}

.menu__sub-list {
	position: relative;
	padding: 10px 0;
	flex: 1 1 100%;
	margin: 10px 0px 0px 0px;
}


.menu__sub-item:not(:last-child) {
	margin: 0px 0px 20px 0px;
}

.menu__sub-link {
	color: #333333;
	line-height: 120%;
}



._icon-arrow-down::after {
	content: '';
	position: relative;
	top: 0px;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(180deg);
	width: 12px;
	height: 8px;
	/* background: url(../img/icons/arrow-down-s.svg) no-repeat; */
}

._icon-arrow-down._active::after {
	transform: rotate(0deg);
}

.menu__header-logo {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 10px;
}

.page {
	flex: 1 1 auto;
}

.page__title {
	font-weight: 600;
	font-size: 18px;
	line-height: 122%;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	margin-top: 20px;
}

.category {
	margin-top: 25px;
	padding-top: 20px;
	border-top: #111111 3px solid;
}

.category__title {
	font-weight: 700;
	font-size: 20px;
	line-height: 122%;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}

.category__text {
	font-weight: 400;
	font-size: 14px;
	line-height: 122%;
	letter-spacing: 0.04em;
	color: #4F4F4F;
	margin-top: 5px;
}

.rup {
	margin-top: 40px;
	padding-top: 15px;
	border-top: #111111 2px solid;
}

.rup__title {
	font-weight: 600;
	font-size: 18px;
	line-height: 122%;
	text-transform: uppercase;
	letter-spacing: 0.12em;
}

.rup__text {
	font-weight: 400;
	font-size: 14px;
	line-height: 122%;
	letter-spacing: 0.04em;
	color: #4F4F4F;
	margin-top: 5px;
}

.rup__image {
	margin-top: 10px;
	padding: 0 0 74% 0;
}

.item {
	margin-top: 40px;
	padding-top: 15px;
	border-top: #111111 1px solid;
}

.item__title {
	font-weight: 600;
	font-size: 14px;
	line-height: 122%;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}

.item__text {
	font-weight: 400;
	font-size: 14px;
	line-height: 122%;
	letter-spacing: 0.04em;
	color: #4F4F4F;
	margin-top: 5px;
}

.item__info {
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.item__price {
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 0.04em;
}

.item__weight {
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	letter-spacing: 0.04em;
}

.item__box-slider {
	margin-top: 10px;
}

.item__image {
	margin-top: 10px;
	padding: 0 0 74% 0;
}

.box-slider {
	position: relative;
}

.box-slider__slide {
	min-width: 100%;
}

.box-slider__image {
	padding: 0 0 74% 0;
}

.controls-slider-box {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	pointer-events: none;
}

.controls-slider-box__wrapper {
	background-color: #FFF7EB;
	border-radius: 50px;
	padding: 4px 10px;
	width: 47px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
}

._button {
	background: #111111;
	font-weight: 600;
	font-size: 16px;
	line-height: 122%;
	text-align: center;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #F2F2F2;
	width: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 10px;
	transition: background-color 0.3s ease 0s;
	margin-bottom: 10px;
}




/* select */


.select {
	position: relative;
	margin-bottom: 40px;
}

.select__item {
	position: relative;
}

.select__title {
	color: inherit;
	border: none;
	background-color: transparent;
	cursor: pointer;
	border-radius: 4px;
}

.select__title._active>.select__value._icon-arrow-down::after {
	transform: rotate(0deg);
}

.select__value {
	display: flex;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	height: 30px;
	padding: 0px 0px;
	align-items: center;
	justify-content: space-between;
}

.select__value span {
	display: flex;
	width: 100%;
	height: 1em;
	overflow: hidden;
}

.select__input {
	width: 100%;
	background-color: transparent;
	height: 100%;
}

.select__options {
	color: #000;
	position: relative;
	top: 0px;
	border-radius: 0 0 4px 4px;
	min-width: 100%;
	left: 0;
	border-top: 0;
	font-size: 14px;
	border: none;
	z-index: 100;
	overflow: hidden;
}

.options {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.options__item {
	position: relative;
	cursor: pointer;
}

.options__input {
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	left: 0;
	top: 0;
	visibility: hidden;
}

.select__value img {
	margin-right: 10px;
	width: 12px;
	height: 12px;
	position: relative;
	top: 4px;
}





.select__option {
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	padding: 8px 0px 0px 0px;
	margin: 0px 0px 0px 0px;

}

.select__option img {
	margin-right: 10px;
	position: relative;
	top: 0px;
}

.select__form {
	width: 100%;
	font-family: inherit;
	font-weight: 700;
}



.popup {
	-webkit-overflow-scrolling: touch;
	z-index: 100;
	padding: 0px;
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease 0s;
	transform: translate(-100%, 0px);
}




.popup._active {
	overflow: auto;
	visibility: visible;
	transform: translate(0%, 0px);
}

.popup._active::before {
	/* opacity: 1; */
}

.popup._active .popup__body {
	-webkit-transition: all 0.3s ease 0.2s;
	-o-transition: all 0.3s ease 0.2s;
	transition: all 0.3s ease 0.2s;
	/* -webkit-transform: scale(1);
		 -ms-transform: scale(1);
			  transform: scale(1); */
}

.popup__content {

	min-height: 100%;
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;

}

.popup__body {
	/* -webkit-transform: scale(0);
		 -ms-transform: scale(0);
			  transform: scale(0); */
	position: relative;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	background-color: #fff;
	padding: 0px;
	width: 100%;
	max-width: 800px;
	height: 100%;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	align-items: center;
	padding: 15px;
}

.popup__close {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
	z-index: 30;
	
}
.popup__close svg use {
	fill:#212121;
}

.popup__button {
	max-width: 450px;
}

.footer {
	margin-top: 100px;
	
}
.footer__container {
	width: 100%;
	background: #fff;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%,0px);
}

._button:first-child {
	margin: 15px 0;
}

</style>