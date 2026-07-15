<template>
  <!--
    App.vue es el "molde" de toda la página: siempre se ve el header
    y el footer, y solo cambia lo de en medio (<router-view />) según
    la URL en la que estés. Así no repites el header en cada vista.
  -->
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
  <CartDrawer />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
</script>
