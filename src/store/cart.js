import { defineStore } from 'pinia'
import { getProductById } from '../data/products'

// Esto reemplaza todo lo que antes era una variable global "cart = {}"
// desperdigada en funciones sueltas. Ahora es UN SOLO lugar con la
// verdad del carrito. Cualquier componente (header, drawer, checkout)
// puede leer o modificar esto, y TODOS se actualizan solos, automático.
//
// "defineStore" recibe un nombre único ('cart') y un objeto con:
// - state: los datos que se guardan
// - getters: datos calculados a partir del state (como fórmulas)
// - actions: funciones que modifican el state

export const FREE_SHIP_THRESHOLD = 60
export const SHIP_COST = 8.90

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: {},       // { productId: cantidad }
    isDrawerOpen: false,
  }),

  getters: {
    lines(state) {
      return Object.entries(state.items)
        .map(([id, qty]) => ({ product: getProductById(id), qty }))
        .filter(line => line.qty > 0 && line.product)
    },
    totalCount(state) {
      return Object.values(state.items).reduce((sum, qty) => sum + qty, 0)
    },
    subtotal() {
      return this.lines.reduce((sum, line) => sum + line.product.price * line.qty, 0)
    },
    shippingCost() {
      if (this.subtotal === 0 || this.subtotal >= FREE_SHIP_THRESHOLD) return 0
      return SHIP_COST
    },
    total() {
      return this.subtotal + this.shippingCost
    },
    amountLeftForFreeShip() {
      return Math.max(0, FREE_SHIP_THRESHOLD - this.subtotal)
    },
  },

  actions: {
    getQty(productId) {
      return this.items[productId] || 0
    },
    add(productId, qty = 1) {
      const current = this.items[productId] || 0
      this.items[productId] = current + qty
    },
    setQty(productId, qty) {
      this.items[productId] = Math.max(0, qty)
    },
    remove(productId) {
      delete this.items[productId]
    },
    clear() {
      this.items = {}
    },
    openDrawer() {
      this.isDrawerOpen = true
    },
    closeDrawer() {
      this.isDrawerOpen = false
    },
  },
})
