import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import { createRouter, createWebHistory } from 'vue-router'
import MainComp from './components/MainComp.vue'
import Product from './components/Product.vue'
import store from './store'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainComp
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },
    ],
      history: createWebHistory()
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
