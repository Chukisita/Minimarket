import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductView from '../views/ProductView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'

// AQUÍ es el "mapa" del sitio. Si mañana agregas una página nueva
// (ej. "Mi cuenta"), solo agregas una línea aquí y creas su archivo
// en /views. No tienes que tocar nada más.
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/categoria/:nombre', name: 'categoria', component: CategoryView, props: true },
  { path: '/producto/:id', name: 'producto', component: ProductView, props: true },
  { path: '/checkout', name: 'checkout', component: CheckoutView },
  { path: '/gracias', name: 'confirmacion', component: ConfirmationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
