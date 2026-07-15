import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// Este archivo arma 3 piezas y las conecta:
// 1. La app de Vue (App.vue = el esqueleto visual)
// 2. Pinia (el "cerebro" que guarda el estado: carrito, etc.)
// 3. El router (decide qué vista mostrar según la URL)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
