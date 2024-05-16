<template>
  <v-app>

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue'
</script>

<style lang="scss">
@import "@/styles/settings.scss";

* {
  background-color: $paper;
  font-family: "Neucha", cursive;
  font-weight: 400;
  font-style: normal;
}

</style>
