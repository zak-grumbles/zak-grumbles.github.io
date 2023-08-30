<template>
    <v-responsive :aspect-ratio="4/3" min-height="150" max-height="350">
            <v-sheet
                :elevation="6"
                rounded
                class="nav-card-sheet ma-2"
                height="100%"
                :style="{ backgroundImage: `url(${background})` }">
                <div class="fill-height nav-card-body d-flex flex-row justify-center align-center" no-gutters>
                    <span class="text-h6 nav-card-title">{{ title }}</span>
                </div>
            </v-sheet>
    </v-responsive>
</template>

<style lang="scss" scoped>
@import "@/styles/settings.scss";

.nav-card-sheet {
    background-size: cover;
    background-position: center;
}

.nav-card-body {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
}

.nav-card-title {
    color: $white-warm;
    text-align: center;
    text-justify: center;
    height: min-content;
}
</style>

<script setup lang="ts">
interface CardProps {
    title?: string,
    background?: string
}

const props = defineProps<CardProps>()

</script>