<template>
  <div v-if="cart.isDrawerOpen" class="overlay" @click="cart.closeDrawer()"></div>
  <div class="drawer" :style="{ transform: cart.isDrawerOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .25s ease' }">
    <div class="drawer-head">
      <h3>Tu carrito ({{ cart.totalCount }} productos)</h3>
      <button @click="cart.closeDrawer()">✕</button>
    </div>

    <div class="drawer-body">
      <div v-if="cart.lines.length === 0" class="drawer-empty">
        🛒<br /><br />Tu carrito está vacío.<br />¡Agrega productos para empezar!
      </div>
      <div v-else v-for="line in cart.lines" :key="line.product.id" class="drawer-item">
        <div class="img">{{ line.product.icon }}</div>
        <div class="info">
          <div class="n">{{ line.product.name }}</div>
          <div class="p">{{ money(line.product.price) }} c/u</div>
        </div>
        <div class="stepper">
          <button @click="cart.setQty(line.product.id, line.qty - 1)">−</button>
          <span>{{ line.qty }}</span>
          <button @click="cart.setQty(line.product.id, line.qty + 1)">+</button>
        </div>
        <button class="del" @click="cart.remove(line.product.id)">🗑️</button>
      </div>
    </div>

    <div class="drawer-foot">
      <div class="free-ship">
        <template v-if="cart.amountLeftForFreeShip > 0">
          🚚 Agrega <b>{{ money(cart.amountLeftForFreeShip) }}</b> más para tener envío gratis
        </template>
        <template v-else>
          ✅ ¡Tu pedido califica para envío gratis!
        </template>
        <div class="bar"><i :style="{ width: shipProgressPct + '%' }"></i></div>
      </div>
      <div class="subtotal-row"><span>Subtotal</span><b>{{ money(cart.subtotal) }}</b></div>
      <button class="btn-primary-full" @click="goCheckout">IR A PAGAR / CHECKOUT</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore, FREE_SHIP_THRESHOLD } from '../store/cart'

const cart = useCartStore()
const router = useRouter()

const shipProgressPct = computed(() =>
  Math.min(100, (cart.subtotal / FREE_SHIP_THRESHOLD) * 100)
)

function money(n) {
  return 'S/ ' + n.toFixed(2)
}
function goCheckout() {
  cart.closeDrawer()
  router.push({ name: 'checkout' })
}
</script>
