export default {
	mounted(el, binding)  {
		console.dir(element)
		console.log(binding)

        el.addEventListener('click', e => e.stopPropagation());
        document.body.addEventListener('click', binding.value);
    },
    unbind(el, binding) {
        document.body.removeEventListener('click', binding.value);
    },
	// mounted(element,{value}) {
	// 	element.myclickoutside = function (event) {
	// 		if (!(element == event.target || element.contains(event.target))){
	// 			value(event);
	// 		}
	// 	}

	// 	document.body.addEventListener('click', element.myclickoutside);
	// },
	// unmounted(element,{value}) {
	// 	document.body.addEventListener('click', element.myclickoutside)
	// },

// 	mounted(el, binding)  {
		
// 		el.handleClick = function(MouseEvent) {
// 			if (false === el.contains((event.target as HTMLElement))) {
// 				if (vnode.context) {
// 					vnode.context[binding.expression](event);
// 				}
// 			}
// 		};
// 		concole.log('Устанавливаем слушатель')
// 		document.addEventListener('click', el.handleClick)
//   },
// 	unmounted(el) {
// 		concole.log('Удаляем слушатель')
// 		document.removeEventListner('click', el.handleClick);

// 	},
	name:'myclickoutside'
}