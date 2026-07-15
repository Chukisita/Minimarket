<template>
  <section v-if="product">
    <div class="breadcrumbs">
      <router-link to="/">Inicio</router-link> ›
      <router-link :to="{ name: 'categoria', params: { nombre: product.cat } }">{{ product.cat }}</router-link> ›
      <span>{{ product.name }}</span>
    </div>

    <div class="pdp">
      <div>
        <div class="pdp-gallery">{{ product.icon }}</div>
        <div class="pdp-thumbs"><div>{{ product.icon }}</div><div>📦</div><div>🏷️</div></div>
      </div>

      <div class="pdp-info">
        <div class="brand-line">{{ product.brand }}</div>
        <h2>{{ product.name }}</h2>

        <div class="pdp-price-block">
          <span v-if="product.old" class="old">{{ money(product.old) }}</span>
          <span class="now">{{ money(product.price) }}</span>
          <span v-if="product.old" class="save">-{{ discountPct }}%</span>
        </div>

        <div class="pdp-qty">
          <div class="box">
            <button @click="qty = Math.max(1, qty - 1)">−</button>
            <span class="n">{{ qty }}</span>
            <button @click="qty = qty + 1">+</button>
          </div>
          <span style="font-size:12.5px;color:var(--muted);">Stock disponible: {{ product.stock }} unid.</span>
        </div>

        <button class="pdp-add-btn" @click="addAndOpenCart">🛒 AGREGAR AL CARRITO</button>

        <div class="pdp-tabs">
          <details class="pdp-tab" open>
            <summary>Descripción del producto ⌄</summary>
            <div>{{ product.desc }}</div>
          </details>
          <details class="pdp-tab">
            <summary>Información nutricional / ingredientes ⌄</summary>
            <div>Valores referenciales por porción — este es un contenido de demostración para el prototipo.</div>
          </details>
          <details class="pdp-tab">
            <summary>Términos y condiciones de entrega ⌄</summary>
            <div>Despacho en un plazo de 2 a 4 horas en Lima Metropolitana. Retiro en tienda disponible en 30 minutos.</div>
          </details>
        </div>
      </div>
    </div>
  </section>

  <section v-else>
    <p>Producto no encontrado.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../store/cart'
import { getProductById } from '../data/products'

const props = defineProps({
  id: { type: [String, Number], required: true }
})

const cart = useCartStore()
const product = computed(() => getProductById(props.id))
const qty = ref(1)

const discountPct = computed(() => {
  if (!product.value?.old) return 0
  return Math.round(100 - (product.value.price / product.value.old * 100))
})

function money(n) {
  return 'S/ ' + n.toFixed(2)
}
function addAndOpenCart() {
  cart.add(product.value.id, qty.value)
  cart.openDrawer()
}
</script>
