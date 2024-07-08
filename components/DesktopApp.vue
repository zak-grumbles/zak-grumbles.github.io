<template>
    <div class="hover:bg-slate-500 transition-colors ease-in-out duration-300">
        <img :src="props.iconPath" :alt="props.altText"/>
    </div>
</template>

<script setup lang="ts">
    interface DesktopAppProps {
        iconPath: string,
        altText: string
    }

    const props = defineProps<DesktopAppProps>();

</script>