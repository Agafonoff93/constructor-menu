import { createStore } from 'vuex'
import { userModule } from '@/store/module/userModule'
import { templatesModule } from '@/store/module/templatesModule'
import { meaningModule } from '@/store/module/meaningModule'

export default createStore({

  modules: {
	user: userModule,
	templates: templatesModule,
	// meaning: meaningModule,
  }
})
