<script setup>
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import './introduction.css';

    onMounted(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            // Create a timeline for sequenced animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Animate hero content on page load
            tl
            .from('.introduction .formula', {
                opacity: 0,
                x: -500,
                scale: 0.9,
                duration: 1
            })
            .from('.introduction .head', {
                opacity: 0,
                scale: 1,
                x: -100,
                duration: 1.2
            }, '-=0.8')
            .from('.introduction h1', {
                opacity: 0,
                y: 60,
                duration: 1
            }, '-=0.8')
            .from('.introduction .floating-text', {
                opacity: 0,
                x: -100,
                duration: 1.2
            }, '-=1')
            .from('.introduction .coins', {
                opacity: 0,
                scale: 0.8,
                x: 100,
                duration: 1.2
            }, '-=1')
            .from('.introduction .buttons a', {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.8
            }, '-=0.5')
            .from('.introduction .scroll-down', {
                opacity: 0,
                y: 300,
                duration: 1.8
            }, '-=0.1');


            // Add a subtle floating animation to the scroll down icon
            gsap.to('.introduction .scroll-down rect:nth-child(3)', {
                y: 4,
                duration: 1.5,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
                delay: 2
            });
        }, 50);
    });
</script>

<template>
    <section class="introduction">
		<div class="container-custom flex items-end justify-between">

            <!-- Floating text in bg -->
            <span class="floating-text">Grah Hill</span>

            <!-- Floating head -->
            <picture>
                <source srcset="../../assets/img/hero-head.webp" type="image/webp">
                <source srcset="../../assets/img/hero-head.png" type="image/png">
                <img class="head" src="../../assets/img/hero-head.png" alt="Investiční mince mistrů Formule 1">
            </picture>

            <!-- Floating formula 1 -->
            <picture>
                <source srcset="../../assets/img/formule.webp" type="image/webp">
                <source srcset="../../assets/img/formule.png" type="image/png">
                <img class="formula" src="../../assets/img/formule.png" alt="Investiční mince mistrů Formule 1">
            </picture>

            <!-- Left content -->
            <div class="left-content">
                <h1>
                    Unikátní investiční <br>
                    mince s motivy mistrů 
                    světa <span class="text-secondary whitespace-nowrap">Formule 1.</span>
                </h1>

                <div class="buttons">
                    <a href="#our-coins" class="btn">
                        Zjistit více
                    </a>
                    <a href="#our-coins" class="btn btn-transparent px-9">
                        <svg width="100%" height="100%" viewBox="0 0 84 82" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(1,0,0,1,-1624.995677,-3317.630904)">
                                <g transform="matrix(4.166667,0,0,4.166667,0,-2975.208333)">
                                    <path d="M395.15,1527.23C395.87,1527.23 396.45,1527.81 396.45,1528.53C396.45,1529.24 395.87,1529.82 395.15,1529.82C394.44,1529.82 393.86,1529.24 393.86,1528.53C393.86,1527.81 394.44,1527.23 395.15,1527.23ZM406.43,1527.23C407.15,1527.23 407.73,1527.81 407.73,1528.53C407.73,1529.24 407.15,1529.82 406.43,1529.82C405.72,1529.82 405.14,1529.24 405.14,1528.53C405.14,1527.81 405.72,1527.23 406.43,1527.23ZM390.88,1510.29L392.96,1510.65C393.29,1510.71 393.55,1510.99 393.58,1511.33L393.81,1514.13L404.96,1514.13L405.57,1514.14L408.13,1514.14L408.16,1514.15L408.2,1514.15C408.76,1514.23 409.25,1514.52 409.58,1514.97C409.92,1515.42 410.06,1515.97 409.98,1516.52L409.03,1523.08C408.85,1524.32 407.77,1525.27 406.51,1525.27L395.58,1525.27C394.27,1525.27 393.15,1524.24 393.05,1522.92L392.13,1512.03L390.62,1511.77C390.21,1511.7 389.94,1511.31 390.01,1510.9C390.08,1510.49 390.48,1510.23 390.88,1510.29ZM402.83,1515.63L393.94,1515.63L394.54,1522.8C394.58,1523.35 395.04,1523.77 395.59,1523.77L406.5,1523.77C407.02,1523.77 407.47,1523.38 407.54,1522.86L408.49,1516.3C408.51,1516.14 408.48,1516 408.38,1515.87C408.28,1515.74 408.15,1515.66 407.99,1515.63L407.94,1515.63L407.83,1515.64L403.69,1515.64L402.83,1515.63ZM404.9,1517.82C405.31,1517.82 405.65,1518.16 405.65,1518.57C405.65,1518.99 405.31,1519.32 404.9,1519.32L402.12,1519.32C401.71,1519.32 401.37,1518.99 401.37,1518.57C401.37,1518.16 401.71,1517.82 402.12,1517.82L404.9,1517.82Z" style="fill:rgb(234,198,102);"/>
                                </g>
                            </g>
                        </svg>

                        Koupit v e-shopu
                    </a>
                </div>
            </div>

            <!-- Coins image -->
            <picture>
                <source srcset="../../assets/img/hero-coins.webp" type="image/webp">
                <source srcset="../../assets/img/hero-coins.png" type="image/png">
                <img class="coins" src="../../assets/img/hero-coins.png" alt="Investiční mince mistrů Formule 1">
            </picture>

            <!-- Scroll down icon -->
            <svg class="scroll-down" width="17" height="268" viewBox="0 0 17 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="58" width="1" height="210" rx="0.5" fill="#6C6C6C"/>
                <rect x="1" y="1" width="15" height="27" rx="7.5" stroke="#404040" stroke-width="2"/>
                <rect x="7" y="8" width="3" height="6" rx="1.5" fill="#404040"/>
            </svg>
        </div>
	</section>
</template>