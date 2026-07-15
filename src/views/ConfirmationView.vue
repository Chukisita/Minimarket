<template>
  <div class="confirm">
    <div class="check">✓</div>
    <h2>¡Gracias por tu compra!</h2>
    <p class="sub">Hemos recibido tu pedido y ya lo estamos preparando.</p>

    <div class="order-box">
      <div class="r"><span>Número de orden</span><b>{{ route.query.orden || '#000000' }}</b></div>
      <div class="r"><span>Entrega programada</span><b>Mañana, 8:00 am - 12:00 pm</b></div>
      <div class="r"><span>Total pagado</span><b>{{ money(Number(route.query.total || 0)) }}</b></div>
    </div>

    <div class="btnrow">
      <button class="btn-outline" @click="track">Hacer seguimiento a mi pedido</button>
      <router-link class="btn-solid" to="/">Volver a la tienda</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function money(n) {
  return 'S/ ' + n.toFixed(2)
}
function track() {
  alert('Demo: aquí se abriría el seguimiento del pedido.')
}
</script>
