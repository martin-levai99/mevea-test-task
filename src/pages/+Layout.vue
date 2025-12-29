<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import '../assets/main.css'
</script>

<template>
  <Header />
  <slot />
  <Footer />
</template>