<template>
	<div class="wrapper">
	
	<header class="header">
	<div class="header__container _container">
	<div class="header__body">
		<div class="header__logo">
			<div class="header__image">
				<!-- <img src="../assets/logo.svg" alt="logo"> -->
			</div>
			<div class="header__title">
				Конструктор Меню
			</div>
		</div>
		<div class="header__version version">
			<div class="version__label">Версия меню:</div>
			<div class="version__lang select-lang">
				<div class="select-lang__title">RU</div>
			</div>
	
		</div>
	</div>
	</div>
	
	</header>
	<main class="page">
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quo harum cum error, porro officiis optio earum eius temporibus molestiae neque fuga assumenda commodi iure impedit culpa magnam deleniti libero?
		</p>
	</main>
	<footer class="footer">
	<div class="footer__container _container">
	
		
	<div class="footer__stick-wrapper">
		
	</div>
	</div>
	</footer>
	
	</div>
	</template>
	

<script>
export default {
  name: 'LayoutMain',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url(https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap&subset=cyrillic-ext);
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
body,
#app {
  height: 100%;
  min-width: 320px;
}

body {
  line-height: 1;
  font-family: "Montserrat";
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: "Montserrat";
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
  background: #F2F2F2;
}
._container {
  max-width: 1170px;
  margin: 0 auto;
  max-width: 970px;
  padding: 0 15px;
}

.header__body {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__image {
  margin-right: 10px;
}
.header__title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  max-width: 150px;
}
.version {
  text-align: right;
}
.version__label {
  font-weight: 500;
  line-height: 17px;
  color: #828282;
}
.select-lang {
	z-index: 5;
	position: relative;
}
.select-lang__title {
  color: #828282;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
}
.select-lang__title span {
	padding-right: 5px;
}
.footer__container {
  padding-bottom: 55px;
}
.footer__button-orange {
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
.footer__button {
  background: #FFFFFF;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
}
.footer__button img {
  margin-right: 9px;
}
.footer__button span {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #F78408;
}
.footer__button-cancel {
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EB5757;
}
.footer__stick-wrapper {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0;
  left: 0;
}

.page {
  flex: 1 1 auto;
}
.page > div {
	background: #F2F2F2;
}
.start__body {
  padding: 10px 0;
}
.start__title {
  font-weight: 700;
  color: #F78408;
  margin-bottom: 20px;
}
.start__text {
  color: #4F4F4F;
  line-height: 17px;
}
.start__text span {
  color: #F78408;
  font-weight: 700;
}
.start__text p:not(:last-child) {
  margin-bottom: 15px;
}
.create {
  margin: 35px 0;
}
.create__image {
  text-align: center;
}
.create__title {
  margin-top: 10px;
  line-height: 17px;
  text-align: center;
  color: #828282;
}

.input-page__body {
  display: flex;
  flex-direction: column;
}
.input-page__content {
  margin-top: 20px;
}
.input-page__box {
  margin-top: 30px;
}
.input-page__box > *:not(:last-child) {
  margin-bottom: 10px;
}
.input-page__box-images {
  margin-top: 30px;
}
.input-page__wrapper {
  display: flex;
  align-items: flex-end;
}
.input-page__button {
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

.box-images__file {
  margin-top: 10px;
}

.file {
  width: 100%;
  height: auto;
}
.file__item {
  flex: 0 0 81px;
  position: relative;
  height: 81px;
}
.file__item-preview-remove {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.file__item-preview-remove._active::after {
  content: url(../assets/icons/remove.svg);
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 5px;
  
}
.file__item-preview {
  position: relative;
  width: 81px;
  height: 81px;
  border-radius: 5px;
}
.file__item-preview img {
  position: absolute;
  flex: 0 0 81px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 5px;
}
.file__input {
  position: absolute;
  display: inline-flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
}
.file__button {
  width: 81px;
  height: 81px;
}
.file__button img {
  width: 100%;
}
.file__preview {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.counter-text {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #BDBDBD;
  font-size: 12px;
  padding: 5px 9px;
}
._text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
  opacity: 0.8;
}

._label {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.8;
}


.select-lang__wrapper  {
	

}

.select-lang__options {
	border: solid 1px #aeaeae;
	position: absolute;
	top: 0px;
	right: 0px;
	cursor:pointer;
	padding: 10px 20px 15px;
	
	width: 80px;
	background: #FFFFFF;
	box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
}

.select-lang__options_add {
	right: 84px;
}

.select-lang__option {
	display: flex;
   margin-bottom: 10px;
}

.select-lang__option.active  span{
	color:#F78408;
}

.select-lang__option img {
	display: inline-block;
	position: relative;
	width: 12px;
	height: 12px;
   margin-right: 5px;
}
.select-lang__add{
	text-align: center;
}
.select-lang__close{
	text-align: center;
	transform: rotate(45deg);
	margin-bottom: 10px;
}


.options p:hover {
	background: #e7e7e7;
}


._icon-arrow-down::after {
	display: inline-block;
	content: '';
	position: relative;
	top: 0px;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(0deg);
	min-width: 8px;
	height: 5px;
	background: url(../assets/icons/arrow-down-lang.svg) no-repeat;
}
._icon-arrow-down._active::after {
	transform: rotate(180deg);
}


/*Start animation */

.pages-enter-active, .pages-leave-active {
transition: all .3s ;	
}

.pages-enter-to {
	transform: translate(0px,-100%);
}
 .pages-leave-to {
	/* transform: translate(0px,-100%); */
}

/*End animation */

._icon-css{
	position: relative;
	width: 40px;
	height: 40px;
	border: 2px dashed #BDBDBD;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
}
._icon-css span{
position: relative;
width:12px;
height: 2px;
top: 0;
left: 0;
background-color: #BDBDBD;
}
._icon-css span::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
transform: rotate(-90deg);
}



._icon-css-lg {
	position: relative;
	width: 150px;
	height: 150px;
	border: 2px dashed #BDBDBD;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
}
._icon-css-lg span{
position: relative;
width:43px;
height: 6px;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
}
._icon-css-lg span::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #BDBDBD;
border-radius: 3px;
transform: rotate(-90deg);
}


</style>
