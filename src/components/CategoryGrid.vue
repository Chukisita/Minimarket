<template>
  <div class="cat-grid">
    <router-link
      v-for="c in categories"
      :key="c.name"
      :to="{ name: 'categoria', params: { nombre: c.name } }"
      class="cat-chip"
    >
      <div class="ic">{{ c.icon }}</div>
      <span>{{ c.name }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { CATEGORIES } from '../data/products'
const categories = CATEGORIES
</script>
