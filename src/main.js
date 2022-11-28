import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from '@/components/UI/';



const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
	console.log(components)
});



app.use(store).mount('#app')





// document.addEventListener('DOMContentLoaded', function () {
// 	//получаем инпут файл в переменную
// 	const formImage = document.getElementById('formImage');
// 	//Получаем вид для превью переменную
// 	const formPreview = document.getElementById('formPreview');

//    // слушаем изменения в инпуте файла
// 	formImage.addEventListener('change', () => {
// 		// if(!formImage.files)
// 		uploadFile(formImage.files[0]);
// 	})
//    console.log(!formImage.files[0]);
// 	function uploadFile(file) {
// 		//проверяем тип файла
// 		// console.log(formImage.files);
// 		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
// 			alert('Разрешены только изображения.');
// 			formImage.value = '';
// 			return;
// 		}
// 		//проверяем раззмер файла(<2Mb)
// 		if (file.size > 2 * 1024 * 1024) {
// 			alert('Файл должен быть менее 2 Мб');
// 			return;
// 		}
      
// 		let  reader = new FileReader();
	
// 		console.log(reader)
// 		reader.onload = function (e) {
// 			let src = e.target.result;
// 			formPreview.insertAdjacentHTML('beforeend', `
// 			<div class="file__item-preview"><img src="${src}" alt="${file.name}" /></div>
// 			`)
			
// 		};
// 		reader.onerror = function (e) {
// 			alert('Ошибка');
// 		};
// 		reader.readAsDataURL(file);
		
// 	}
// });
