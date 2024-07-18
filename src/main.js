import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faUserSecret,faPhone, faSquareEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faCartShopping,faPhone,faSquareEnvelope,faLocationDot)
 const app = createApp(App)
  app.use(router)
  app.mount('#app')
  app.component('font-awesome-i', FontAwesomeIcon)
