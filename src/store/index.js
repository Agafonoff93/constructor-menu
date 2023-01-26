import { createStore } from 'vuex'
import {userModule} from '@/store/module/userModule'

export default createStore({

  modules: {
	user: userModule
  }
})
