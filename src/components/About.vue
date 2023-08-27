<template>
    <v-container>
        <v-responsive class="align-center text-sm-center fill-height">
            <v-avatar image="@/assets/me.jpg" size="150"></v-avatar>

            <h1 class="mt-1 text-center">Hi! I'm Zak.</h1>
            <div class="text-subtitle-1 mb-1 text-center">
                I make software. Front-end, back-end, or world-ending, I can do it.
            </div>
            <div class="text-subtitle-2 font-italic font-weight-light">
                (For legal reasons, the world-ending part is a joke.)
            </div>

            <v-divider :thickness="3" class="border-opacity-100 mt-5 mb-5"></v-divider>

            <div class="text-body-1 text-left">Testing</div>
        </v-responsive>
    </v-container>
</template>

<style scoped lang="scss">
    @import "@/styles/settings.scss";

    .v-divider {
        color: $green-dark;
    }
</style>

<script lang="ts" setup>
</script>
