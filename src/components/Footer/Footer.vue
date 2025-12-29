<script setup>
    import './footer.css';
    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        © {{ currentYear }} Mevea, všechna práva vyhrazena.
    </footer>
</template>