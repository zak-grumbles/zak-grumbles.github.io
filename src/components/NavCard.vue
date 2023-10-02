<template>
    <v-responsive :aspect-ratio="4 / 3" min-height="150">
        <v-hover>
            <div class="nav-card fill-height pa-3">
                <v-sheet v-bind="props" rounded class="nav-card-sheet fill-height transition-swing"
                    :style="{ backgroundImage: `url(${background})` }"
                    @click="onCardClicked">
                    <div class="fill-height nav-card-body d-flex flex-row justify-center align-center" no-gutters>
                        <span class="text-h6">{{ title }}</span>
                    </div>
                </v-sheet>
            </div>
        </v-hover>
    </v-responsive>
</template>

<style lang="scss" scoped>
.nav-card-sheet {
    position: relative;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0.0, 0.0, 0.0, 0.3);
    transition: box-shadow 0.2s ease-in-out;
    transition: transform 0.1s ease-in-out;

    &:hover {
        box-shadow: 7px 7px 7px rgba(0.0, 0.0, 0.0, 0.15);
        transform: scale(1.01);
    }
}

.nav-card-body {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    top: 0;
    left: 0;
    width: 100%;
}

span {
    color: rgb(var(--v-theme-primary-warm));
    text-align: center;
    text-justify: center;
    height: min-content;
}

</style>

<script setup lang="ts">
import router from '@/router/index';

interface CardProps {
    title?: string,
    background?: string,
    to?: string
}

const props: CardProps = defineProps<CardProps>()

function onCardClicked(): void {
    if (props.to) {
        router.push(props.to)
    }
}

</script>