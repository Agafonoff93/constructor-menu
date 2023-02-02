import { createRouter, createHashHistory, createWebHashHistory } from 'vue-router';
import MainPreview from '@/components/MainPreview.vue';
import EditingAbout from '@/components/Editing/EditingAbout.vue';
import EditingCategory from '@/components/Editing/EditingCategory.vue';
import EditingRubric from '@/components/Editing/EditingRubric.vue';
import EditingDish from '@/components/Editing/EditingDish.vue';
import LayoutMain from '@/components/LayoutMain.vue';

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', 
		component: MainPreview, 
		props:true,
		},
		{ path: '/editingabout', 
		component: EditingAbout, 
		props:true 
		},
		{ path: '/editingcategory', 
		component: EditingCategory,
		props:true 
		},
		{ path: '/editingrubric', 
		component: EditingRubric,
		props:true
		},
		{ path: '/editingdish', 
		component: EditingDish,
		props:true
		},
		{ path: '/layoutmain', 
		component: LayoutMain,
		},
	 ]
})