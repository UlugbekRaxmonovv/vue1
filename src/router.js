import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/Home', component: Home, alias: '/' },
        { path: '/About', component: About },
    ]
})
