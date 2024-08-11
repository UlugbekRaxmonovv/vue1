import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './context/store'
import Toast from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { faCartShopping, faUserSecret,faPhone, faSquareEnvelope,faLocationDot, faFastBackward} from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faCartShopping,faPhone,faSquareEnvelope,faLocationDot,faFastBackward)
 const app = createApp(App)
  app.use(router)
  app.mount('#app')
  app.use(Toast)
  app.use(store)
  app.component('font-awesome-i', FontAwesomeIcon)
