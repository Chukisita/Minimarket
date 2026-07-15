<template>
  <div class="topbar">
    <span>🚚 Envío gratis desde S/ 60 · Lima y Callao</span>
    <span>📍 Retiro en tienda en 30 min &nbsp;|&nbsp; Atención: Lun-Dom 8am-10pm</span>
  </div>

  <header class="site">
    <div class="header-inner">
      <router-link to="/" class="logo"><span class="leaf">🌿</span> La Cosecha</router-link>

      <div class="search-wrap">
        <input
          v-model="query"
          type="text"
          placeholder="¿Qué estás buscando hoy?"
          @keydown.enter="doSearch"
        />
        <button @click="doSearch">🔍</button>
      </div>

      <div class="mode-toggle">
        <button :class="{ active: mode === 'delivery' }" @click="mode = 'delivery'">Despacho a domicilio</button>
        <button :class="{ active: mode === 'pickup' }" @click="mode = 'pickup'">Retiro en tienda</button>
      </div>

      <div class="header-actions">
        <button class="icon-btn"><span class="ic">👤</span>Ingresar</button>
        <button class="icon-btn" @click="cart.openDrawer()">
          <span class="ic">🛒</span>Carrito
          <span class="cart-count">{{ cart.totalCount }}</span>
        </button>
      </div>
    </div>

    <nav class="mainnav">
      <div class="nav-inner">
        <button class="cat-drop">☰ Todas las categorías</button>
        <router-link class="navlink hot" :to="{ name: 'categoria', params: { nombre: 'Ofertas del día' } }">🔥 Ofertas del día</router-link>
        <router-link class="navlink hot" :to="{ name: 'categoria', params: { nombre: 'Cyber Wow' } }">⚡ Cyber Wow</router-link>
        <router-link class="navlink" :to="{ name: 'categoria', params: { nombre: 'Marcas Propias' } }">Marcas Propias</router-link>
        <router-link class="navlink" :to="{ name: 'categoria', params: { nombre: 'Recetas' } }">Recetas</router-link>
        <router-link class="navlink" to="/">Inicio</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'

const cart = useCartStore()
const router = useRouter()
const query = ref('')
const mode = ref('delivery')

function doSearch() {
  if (!query.value.trim()) return
  router.push({ name: 'categoria', params: { nombre: query.value.trim() } })
}
</script>
