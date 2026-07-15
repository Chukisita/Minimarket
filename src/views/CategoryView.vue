<template>
  <section>
    <div class="breadcrumbs">
      <router-link to="/">Inicio</router-link> &nbsp;›&nbsp; <span>{{ nombre }}</span>
    </div>

    <div class="plp-layout">
      <aside class="filters">
        <h4>Filtrar por</h4>
        <div class="filter-block">
          <b style="font-size:12.5px;">Marca</b><br /><br />
          <label><input type="checkbox" checked /> Costeño</label>
          <label><input type="checkbox" checked /> Gloria</label>
          <label><input type="checkbox" /> Alicorp</label>
          <label><input type="checkbox" /> Laive</label>
        </div>
        <div class="filter-block">
          <b style="font-size:12.5px;">Rango de precio</b><br /><br />
          <input type="range" min="0" max="50" value="30" style="width:100%" />
          <div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--muted);">
            <span>S/ 0</span><span>S/ 50+</span>
          </div>
        </div>
        <div class="filter-block">
          <b style="font-size:12.5px;">Atributos</b><br /><br />
          <label><input type="checkbox" /> Orgánico</label>
          <label><input type="checkbox" /> Sin azúcar</label>
          <label><input type="checkbox" /> Sin gluten</label>
        </div>
      </aside>

      <div>
        <div class="plp-toolbar">
          <span>{{ productos.length }} resultados encontrados</span>
          <select>
            <option>Ordenar por: Relevancia</option>
            <option>Menor precio</option>
            <option>Mayor precio</option>
          </select>
        </div>
        <div class="plp-grid">
          <ProductCard v-for="p in productos" :key="p.id" :product="p" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { CATEGORIES, getProductsByCategory, searchProducts, getAllProducts } from '../data/products'

const props = defineProps({
  nombre: { type: String, required: true }
})

const KNOWN = [...CATEGORIES.map(c => c.name), 'Ofertas del día', 'Cyber Wow', 'Los más vendidos']

// Si "nombre" es una categoría conocida, filtramos por categoría.
// Si no (viene de una búsqueda libre), buscamos por texto.
const productos = computed(() => {
  if (KNOWN.includes(props.nombre)) {
    if (props.nombre === 'Marcas Propias' || props.nombre === 'Recetas') {
      return getAllProducts()
    }
    return getProductsByCategory(props.nombre)
  }
  return searchProducts(props.nombre)
})
</script>
