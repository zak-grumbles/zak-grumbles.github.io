<template>
    <div class="w-full h-full">
        <DesktopBar>
            <DesktopApp :icon-path="zg" alt-text="Zak Grumbles" />
            <DesktopApp :icon-path="tg" alt-text="terrain-gen" />
        </DesktopBar>
        <slot/>
    </div>
</template>

<script setup lang="ts">
    import zg from "~/assets/zg.svg";
    import tg from "~/assets/tg.svg";
</script>