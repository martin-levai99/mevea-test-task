<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import './our-coins.css';

    // Import images using Vite's dynamic import
    import coinHillWebp from '@/assets/img/coin-hill.webp';
    import coinHillPng from '@/assets/img/coin-hill.png';
    import coinAlanWebp from '@/assets/img/coin-alan.webp';
    import coinAlanPng from '@/assets/img/coin-alan.png';
    import coinNigelWebp from '@/assets/img/coin-nigel.webp';
    import coinNigelPng from '@/assets/img/coin-nigel.png';

    const coins = [
        {
            "img_url_webp": coinHillWebp,
            "img_url_png": coinHillPng,
            "name": "Graham Hill",
            "title": "Formula One World Champion",
            "years": "1962, 1968"
        },
        {
            "img_url_webp": coinAlanWebp,
            "img_url_png": coinAlanPng,
            "name": "Alan Jones",
            "title": "F1 Winner",
            "years": "1980"
        },
        {
            "img_url_webp": coinNigelWebp,
            "img_url_png": coinNigelPng,
            "name": "Nigel Mansell",
            "title": "Formula One World Champion",
            "years": "1992"
        }
    ];

    onMounted(async () => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate heading when scrolled into view
            gsap.from('.our-coins h2', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.our-coins h2',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

            // Animate formula car
            gsap.from('.our-coins .formula', {
                opacity: 0,
                rotation: -30,
                scale: 0.8,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.our-coins',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            });

            // Animate each coin card with stagger
            gsap.from('.our-coins .coin', {
                opacity: 0,
                y: 80,
                scale: 0.9,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.our-coins .coins',
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            });

            // Animate coin images with rotation effect
            gsap.from('.our-coins .coin-img', {
                rotation: 180,
                scale: 0.5,
                stagger: 0.2,
                duration: 1.2,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: '.our-coins .coins',
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            });
        }, 100);
    });
</script>


<template>
    <section id="our-coins" class="our-coins">

        <!-- Floating formula 1 -->
        <picture>
            <source srcset="../../assets/img/formule.webp" type="image/webp">
            <source srcset="../../assets/img/formule.png" type="image/png">
            <img class="formula" src="../../assets/img/formule.png" alt="Formule">
        </picture>

        <div class="container-custom">
            
            <!-- Heading -->
            <h2 class="text-center">
                <span class="small">
                    V současné době startujeme první etapu,
                </span> <br>
                prvních 12 mistrů světa F1
            </h2>

            <!-- Coins list -->
            <div class="coins">
                <div v-for="coin in coins" :key="coin.title" :id="'mince-' + coin.title.toLowerCase().replace(' ', '-')" class="coin">

                    <picture>
                        <source :srcset="coin.img_url_webp" type="image/webp">
                        <source :srcset="coin.img_url_png" type="image/png">
                        <img class="coin-img" :src="coin.img_url_png" :alt="'Investiční mince - ' + coin.name">
                    </picture>

                    <h3>
                        {{ coin.name }}
                    </h3>

                    <p class="title">
                        {{ coin.title }}
                    </p>

                    <p class="years">
                        {{ coin.years }}
                    </p>

                    <a href="#our-coins" class="btn">
                        Investiční mince
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>