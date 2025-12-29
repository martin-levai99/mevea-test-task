<script setup>
    import './about.css';

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
</script>


<template>
    <section id="about" class="about">

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

                    <a href="#about" class="btn">
                        Investiční mince
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>