<template>
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-32x32.png" />

    <!-- Primary Meta Tags -->
    <title>{{ props.title || 'Motorsport LEGENDS - Investiční mince mistrů Formule 1' }}</title>
    <meta name="description" :content="props.description || 'Exkluzivní kolekce investičních mincí věnovaných legendám motorsportu. Graham Hill, Alan Jones, Nigel Mansell a další mistři světa Formule 1. Limitovaná série vyrobená z nejkvalitnějších materiálů.'" />
    <meta name="keywords" content="investiční mince, Formule 1, F1, Graham Hill, Alan Jones, Nigel Mansell, sběratelské mince, zlaté mince, stříbrné mince, motorsport, legendy F1, investice do zlata" />
    <meta name="author" content="Mevea s.r.o." />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://motorsportlegends.cz/" />
    <meta property="og:title" :content="props.title || 'Motorsport LEGENDS - Investiční mince mistrů Formule 1'" />
    <meta property="og:description" :content="props.description || 'Exkluzivní kolekce investičních mincí věnovaných legendám motorsportu. Limitovaná série vyrobená z nejkvalitnějších materiálů.'" />
    <meta property="og:image" content="/motorsport-legends-og.jpg" />
    <meta property="og:locale" content="cs_CZ" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://motorsportlegends.cz/" />
    <meta name="twitter:title" :content="props.title || 'Motorsport LEGENDS - Investiční mince mistrů Formule 1'" />
    <meta name="twitter:description" :content="props.description || 'Exkluzivní kolekce investičních mincí věnovaných legendám motorsportu.'" />
    <meta name="twitter:image" content="/motorsport-legends-og.jpg" />

    <!-- Performance: Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Performance: Load fonts with display swap -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://motorsportlegends.cz/" />
</template>

<script setup>
    const props = defineProps({
        title: String,
        description: String,
    })
</script>