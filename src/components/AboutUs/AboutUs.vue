<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import './about-us.css';

    onMounted(async () => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate heading
            gsap.from('.about-us h2', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-us',
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            });

            // Animate paragraph
            gsap.from('.about-us p', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-us',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            });
        }, 100);
    });
</script>

<template>
    <section class="container-custom about-us">
        <!-- Heading -->
        <h2 class="text-center">
            <span class="small">
                Jsme #1 prodejci mincí v ČR,
            </span> <br>
            máme letité zkušnosti a je na nás spoleh
        </h2>

        <p>

            Pro lepší otestování vertikálního ukazetele na pravé straně (GSAP Scroll Trigger), jsem si vytvořil tuto sekci. Zdá se, že to funguje jak má. 
        </p>
    </section>
</template>