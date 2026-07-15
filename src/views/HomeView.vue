<template>
  <section>
    <div class="hero">
      <div class="hero-banner">
        <div class="eyebrow">Promo de la semana</div>
        <h2>¡3x2 en todas <br />las Cervezas!</h2>
        <p>Válido del 13 al 19 de julio en tiendas participantes y despacho a domicilio.</p>
        <router-link class="cta" :to="{ name: 'categoria', params: { nombre: 'Bebidas' } }">Ver ofertas →</router-link>
        <div class="sticker">-30%<br /><span style="font-size:10px;font-weight:600;">esta semana</span></div>
      </div>
      <div class="hero-side">
        <div class="card">
          <b>🥑 Frutas y Verduras</b>
          <span>Frescura garantizada, directo del agro</span>
        </div>
        <div class="card">
          <b>💳 Paga con Yape o Plin</b>
          <span>5% de descuento adicional en tu primera compra</span>
        </div>
      </div>
    </div>

    <div class="section-title"><h3>Categorías destacadas</h3></div>
    <CategoryGrid />

    <div class="section-title">
      <h3>Los más vendidos de la semana</h3>
      <router-link :to="{ name: 'categoria', params: { nombre: 'Los más vendidos' } }">Ver todos →</router-link>
    </div>
    <div class="prod-row">
      <ProductCard v-for="p in bestSellers" :key="p.id" :product="p" />
    </div>

    <div class="section-title">
      <h3>Ofertas del día</h3>
      <router-link :to="{ name: 'categoria', params: { nombre: 'Ofertas del día' } }">Ver todas →</router-link>
    </div>
    <div class="prod-row">
      <ProductCard v-for="p in offers" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script setup>
import CategoryGrid from '../components/CategoryGrid.vue'
import ProductCard from '../components/ProductCard.vue'
import { getBestSellers, getOffers } from '../data/products'

const bestSellers = getBestSellers()
const offers = getOffers()
</script>
