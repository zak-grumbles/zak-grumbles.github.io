<template>
    <div class="absolute left-0 top-0 w-16 h-full bg-slate-900 opacity-95 shadow-lg">
        <TaskBarItem :icon-path="zg" alt-text="Zak Grumbles" />
        <TaskBarItem :icon-path="tg" alt-text="terrain-gen" />
    </div>
</template>

<script setup lang="ts">
import zg from "~/assets/zg.svg";
import tg from "~/assets/tg.svg";
</script>

<style scoped lang="scss">
</style>