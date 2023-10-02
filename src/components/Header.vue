<template>
    <v-container>
        <v-responsive class="align-center text-center fill-height" width="100%">
            <v-avatar image="@/assets/me.jpg" size="150" class="mt-5"></v-avatar>

            <div class="text-h4 mt-3 mb-2 text-center">Hi! I'm Zak.</div>
            <div class="text-subtitle-1 mb-2 text-center">
                I make software. Some of it is even good. Front-end, back-end, or world-ending, I can do it.
            </div>
            <div class="text-subtitle-2 font-italic font-weight-light">
                (For legal reasons, the world-ending part is a joke.)
            </div>

            <v-divider :thickness="3" class="border-opacity-100 mt-5 mb-0"></v-divider>
        </v-responsive>
    </v-container>
</template>

<style scoped lang="scss">
    .v-divider {
        color: var(--v-theme-primary-dark);
    }
</style>

<script lang="ts" setup>
</script>
