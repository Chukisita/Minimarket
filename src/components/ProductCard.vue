<template>
  <!--
    Este componente se usa en TODAS partes donde aparece un producto:
    home, categoría, ofertas. Si mañana quieres cambiar cómo se ve
    una tarjeta de producto, la cambias UNA vez, aquí, y se actualiza
    en todo el sitio automáticamente.
  -->
  <div class="card-prod">
    <div v-if="product.offer" class="tag-oferta">OFERTA</div>

    <div class="img-wrap" @click="goToProduct">{{ product.icon }}</div>
    <div class="brand">{{ product.brand }}</div>
    <div class="name" @click="goToProduct">{{ product.name }}</div>

    <div class="price-row">
      <span v-if="product.old" class="price-old">{{ money(product.old) }}</span>
      <span class="price-now" :class="{ reg: !product.old }">{{ money(product.price) }}</span>
    </div>
    <div class="stock">Stock: {{ product.stock }} unid.</div>

    <div v-if="qtyInCart > 0" class="qty-stepper">
      <button @click="cart.setQty(product.id, qtyInCart - 1)">−</button>
      <span class="n">{{ qtyInCart }}</span>
      <button @click="cart.setQty(product.id, qtyInCart + 1)">+</button>
    </div>
    <button v-else class="btn-add" @click="cart.add(product.id, 1)">Agregar +</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'

const props = defineProps({
  product: { type: Object, required: true }
})

const cart = useCartStore()
const router = useRouter()

const qtyInCart = computed(() => cart.getQty(props.product.id))

function money(n) {
  return 'S/ ' + n.toFixed(2)
}
function goToProduct() {
  router.push({ name: 'producto', params: { id: props.product.id } })
}
</script>
