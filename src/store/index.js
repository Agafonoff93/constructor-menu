import { createStore } from 'vuex'
import {userModule} from '@/store/module/userModule'
import {templatesModule} from '@/store/module/templatesModule'

export default createStore({

  modules: {
	user: userModule,
	templates: templatesModule
  }
})
