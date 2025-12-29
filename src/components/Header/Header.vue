<script setup>
    import { ref } from 'vue'
    import './header.css';
    import Logo from '../../assets/img/logo.png';
    import { useScrollSpy } from '@/composables/useScrollSpy';

    const navLinks = [
        {
            text: "Expertise",
            url: "#expertise"   
        },
        {
            text: "My work",
            url: "#my-work"   
        },
        {
            text: "About me",
            url: "#about-me"   
        },
    ];

    // State for mobile menu
    const isOpen = ref(false);

    // Toggle mobile offcanvas
    const toggleMenu = () => {
        isOpen.value = !isOpen.value;
    }

    // GSAP scroll spy
    useScrollSpy(
        'section', // Target all sections
        'nav.desktop a',   // Target navigation links
        {
            start: 'top center',
            end: 'bottom center'
        }
    );
</script>

<template>
    <header class="main-header">

        <!-- Logo -->
        <div class="logo-wrap col-span-6 lg:col-span-3">
            <Logo />
        </div>

        <!-- Desktop nav -->
        <nav class="desktop col-span-6">
            <a v-for="link in navLinks" :href="link.url">
                {{ link.text }}
            </a>
        </nav>

        <!-- CTA -->
        <div class="get-in-touch-wrap col-span-3 flex justify-end gap-3">
            <a href="#contact">
                Get in Touch
            </a>
        </div>

        <!-- Mobile navbar toggle -->
        <div class="mobile-navbar-toggle col-span-6">
            <div class="svg-wrap" @click="toggleMenu" :class="{ toggled: isOpen }" > 
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                    <rect y="5" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                    <rect x="6" y="10" width="9" height="1" rx="0.5" fill="#D9D9D9"/>
                </svg>
            </div>
        </div>

        <!-- Navbar offcanvas -->
        <div class="navbar-offcanvas" :class="{ visible: isOpen }">
            <nav class="mobile">
                <a v-for="link in navLinks" :href="link.url" @click="toggleMenu">
                    {{ link.text }}
                </a>
                <a href="#contact" @click="toggleMenu">
                    Contact
                </a>
            </nav>
        </div>
    </header>
</template>