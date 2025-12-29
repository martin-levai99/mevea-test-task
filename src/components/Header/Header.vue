<script setup>
    import { ref } from 'vue'
    import './header.css';
    import Logo from '../../assets/img/logo.png';
    import { useScrollSpy } from '@/composables/useScrollSpy';

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
    <header class="container-custom main">
        <div class="wrap">

            <!-- Left side -->
            <div class="left-side">
                <!-- Logo -->
                <picture>
                    <source srcset="../../assets/img/logo.webp" type="image/webp">
                    <source srcset="../../assets/img/logo.png" type="image/png">
                    <img class="logo" src="../../assets/img/logo.png" alt="Motorsport LEGENDS logo">
                </picture>
        
                <!-- Legend select -->
                <button class="legend-select">
                    Vyberte si legendu
                    
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.169473 0.167835C0.223058 0.114634 0.286715 0.0724241 0.356797 0.0436241C0.426879 0.0148241 0.50201 0 0.577887 0C0.653763 0 0.728894 0.0148241 0.798977 0.0436241C0.869059 0.0724241 0.932716 0.114634 0.9863 0.167835L7.50015 6.6199L14.014 0.167835C14.0676 0.11472 14.1313 0.0725863 14.2014 0.0438404C14.2715 0.0150945 14.3466 0.000299105 14.4224 0.000299105C14.4983 0.000299105 14.5734 0.0150945 14.6434 0.0438404C14.7135 0.0725863 14.7772 0.11472 14.8308 0.167835C14.8845 0.220951 14.927 0.284008 14.956 0.353407C14.9851 0.422806 15 0.497187 15 0.572304C15 0.64742 14.9851 0.721802 14.956 0.791201C14.927 0.860599 14.8845 0.923657 14.8308 0.976772L7.90857 7.83216C7.85498 7.88537 7.79132 7.92758 7.72124 7.95638C7.65116 7.98518 7.57603 8 7.50015 8C7.42427 8 7.34914 7.98518 7.27906 7.95638C7.20898 7.92758 7.14532 7.88537 7.09174 7.83216L0.169473 0.976772C0.115753 0.923705 0.0731311 0.860663 0.0440502 0.791258C0.0149692 0.721852 0 0.647447 0 0.572304C0 0.49716 0.0149692 0.422755 0.0440502 0.35335C0.0731311 0.283944 0.115753 0.220903 0.169473 0.167835Z" fill="#EAC666"/>
                    </svg>
                </button>
            </div>
    
            <!-- Right side -->
            <div class="right-side">
                <div class="currency-course positive">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.76318 0L9.52632 6H4.3869e-05L4.76318 0Z" fill="#EAC666"/>
                    </svg>
    
                    <div class="texts">
                        <p>
                            1 Unce zlato:
                        </p>
                        <span>
                            45 572.75 Kč
                        </span>
                    </div>
                </div>
    
                <div class="currency-course negative">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.76318 0L9.52632 6H4.3869e-05L4.76318 0Z" fill="#EAC666"/>
                    </svg>
    
                    <div class="texts">
                        <p>
                            1 Unce stříbro:
                        </p>
                        <span>
                            517.83 Kč
                        </span>
                    </div>
                </div>
    
                <div class="divider"></div>
    
                <div class="price-graph">
                    <a href="#about" class="btn btn-transparent">
                        <svg width="100%" height="100%" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(1,0,0,1,-6814.583333,-280.416667)">
                                <g transform="matrix(4.166667,0,0,4.166667,0,-9055.833333)">
                                    <path d="M1646.71,2241.43C1647.07,2241.43 1647.37,2241.72 1647.37,2242.08C1647.37,2242.44 1647.07,2242.73 1646.71,2242.73L1640.39,2242.73C1638.21,2242.73 1636.8,2244.23 1636.8,2246.55L1636.8,2253.58C1636.8,2255.93 1638.18,2257.39 1640.39,2257.39L1647.87,2257.39C1650.06,2257.39 1651.46,2255.9 1651.46,2253.58L1651.46,2247.46C1651.46,2247.1 1651.76,2246.81 1652.12,2246.81C1652.48,2246.81 1652.77,2247.1 1652.77,2247.46L1652.77,2253.58C1652.77,2256.64 1650.8,2258.7 1647.87,2258.7L1640.39,2258.7C1637.47,2258.7 1635.5,2256.64 1635.5,2253.58L1635.5,2246.55C1635.5,2243.49 1637.47,2241.43 1640.39,2241.43L1646.71,2241.43ZM1648.55,2247.37C1648.84,2247.59 1648.89,2248 1648.67,2248.28L1646.12,2251.57C1646.01,2251.71 1645.86,2251.79 1645.69,2251.82C1645.51,2251.84 1645.35,2251.79 1645.2,2251.68L1642.75,2249.76L1640.55,2252.62C1640.41,2252.79 1640.24,2252.87 1640.04,2252.87C1639.89,2252.87 1639.76,2252.83 1639.64,2252.74C1639.35,2252.52 1639.3,2252.11 1639.52,2251.82L1642.12,2248.44C1642.23,2248.3 1642.38,2248.22 1642.56,2248.19C1642.74,2248.17 1642.9,2248.21 1643.04,2248.33L1645.49,2250.25L1647.64,2247.48C1647.86,2247.2 1648.27,2247.14 1648.55,2247.37ZM1651.12,2240.7C1652.4,2240.7 1653.44,2241.74 1653.44,2243.02C1653.44,2244.3 1652.4,2245.34 1651.12,2245.34C1649.84,2245.34 1648.8,2244.3 1648.8,2243.02C1648.8,2241.74 1649.84,2240.7 1651.12,2240.7ZM1651.12,2242C1650.56,2242 1650.1,2242.46 1650.1,2243.02C1650.1,2243.58 1650.56,2244.04 1651.12,2244.04C1651.68,2244.04 1652.14,2243.58 1652.14,2243.02C1652.14,2242.46 1651.68,2242 1651.12,2242Z" style="fill:rgb(234,198,102);"/>
                                </g>
                            </g>
                        </svg>
    
                        Vývoj cen
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Fixed part -->
    <header class="fixed-part">

        <!-- Collapse icon -->
        <button class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </button>

        <!-- Waypoint navigation -->
        <nav class="waypoint-nav">
            <div class="waypoint" data-section="0">
                <span class="waypoint-tooltip">Úvod</span>
            </div>
            <div class="waypoint" data-section="1">
                <span class="waypoint-tooltip">Mince</span>
            </div>
        </nav>
    </header>
</template>