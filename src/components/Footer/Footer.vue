<script setup>
    import './footer.css';
    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <p>
            © {{ currentYear }} Mevea, all rights reserved.
        </p>
    </footer>
</template>