<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header/Header.vue'
    import Footer from './components/Footer/Footer.vue';
</script>

<template>
    <Header />

    <RouterView />

    <Footer />
</template>