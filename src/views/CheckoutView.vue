<template>
  <section>
    <div class="breadcrumbs"><router-link to="/">Inicio</router-link> › Checkout</div>
    <h2 style="margin-top:0;">Finalizar compra</h2>

    <div class="checkout-layout">
      <div>
        <div class="co-block">
          <h4><span class="co-step-num">1</span> Identificación y despacho</h4>
          <div class="form-grid">
            <div class="field"><label>Correo electrónico</label><input type="email" placeholder="tucorreo@ejemplo.com" /></div>
            <div class="field"><label>DNI / CE</label><input type="text" placeholder="76543210" /></div>
            <div class="field"><label>Nombre completo</label><input type="text" placeholder="Nombre y apellido" /></div>
            <div class="field"><label>Teléfono</label><input type="text" placeholder="+51 9XX XXX XXX" /></div>
          </div>
          <div class="form-grid">
            <div class="field"><label>Departamento</label><select><option>Lima</option></select></div>
            <div class="field"><label>Provincia</label><select><option>Lima</option></select></div>
            <div class="field"><label>Distrito</label><select><option>Miraflores</option><option>San Isidro</option><option>Surco</option></select></div>
            <div class="field"><label>Dirección exacta</label><input type="text" placeholder="Av. Siempre Viva 123" /></div>
          </div>
          <div class="form-grid">
            <div class="field"><label>Fecha de entrega</label><input type="date" /></div>
            <div class="field">
              <label>Ventana horaria</label>
              <select>
                <option>8:00 am - 12:00 pm</option>
                <option>12:00 pm - 4:00 pm</option>
                <option>4:00 pm - 8:00 pm</option>
              </select>
            </div>
          </div>
        </div>

        <div class="co-block">
          <h4><span class="co-step-num">2</span> Método de pago</h4>
          <div class="pay-options">
            <div class="pay-opt" :class="{ selected: payMethod === 'tarjeta' }" @click="payMethod = 'tarjeta'"><span class="ic">💳</span>Tarjeta</div>
            <div class="pay-opt" :class="{ selected: payMethod === 'contraentrega' }" @click="payMethod = 'contraentrega'"><span class="ic">💵</span>Contraentrega</div>
            <div class="pay-opt" :class="{ selected: payMethod === 'billetera' }" @click="payMethod = 'billetera'"><span class="ic">📱</span>Yape / Plin</div>
          </div>
          <div v-if="payMethod === 'tarjeta'" class="form-grid">
            <div class="field" style="grid-column:1/-1;"><label>Número de tarjeta</label><input type="text" placeholder="•••• •••• •••• ••••" /></div>
            <div class="field"><label>Fecha de vencimiento</label><input type="text" placeholder="MM/AA" /></div>
            <div class="field"><label>CVV</label><input type="text" placeholder="•••" /></div>
          </div>
        </div>
      </div>

      <div class="co-summary">
        <h4>Resumen de la orden</h4>
        <div class="row"><span>Subtotal</span><span>{{ money(cart.subtotal) }}</span></div>
        <div class="row"><span>Costo de envío</span><span>{{ cart.shippingCost === 0 ? 'Gratis' : money(cart.shippingCost) }}</span></div>
        <div class="row"><span>Descuentos</span><span>- S/ 0.00</span></div>
        <div class="coupon"><input type="text" placeholder="Cupón de descuento" /><button>Aplicar</button></div>
        <div class="row total"><span>Total general</span><span>{{ money(cart.total) }}</span></div>
        <button class="btn-primary-full" style="margin-top:16px;" @click="confirmOrder">
          CONFIRMAR Y PAGAR DE FORMA SEGURA
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'

const cart = useCartStore()
const router = useRouter()
const payMethod = ref('tarjeta')

function money(n) {
  return 'S/ ' + n.toFixed(2)
}

function confirmOrder() {
  // Aquí, en el proyecto real, harías el POST a tu backend con
  // los datos del formulario, el carrito y el método de pago,
  // y esperarías la confirmación antes de navegar. En la demo,
  // simplemente guardamos el total y limpiamos el carrito.
  const orderNumber = '#' + Math.floor(100000 + Math.random() * 899999)
  const total = cart.total
  cart.clear()
  router.push({ name: 'confirmacion', query: { orden: orderNumber, total } })
}
</script>
