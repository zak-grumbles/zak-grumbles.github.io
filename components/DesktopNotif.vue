<template>
    <div class="transform ease-in-out duration-300 absolute bottom-5 right-10 bg-stone p-3 rounded-md border-plum border" :class="{ 'scale-0': isHidden }">
        <div class="text-white">Zak Grumbles</div>
        <div class="h-1 bg-plum w-48 mt-1 mb-2"></div>
        <div class="text-white mb-2">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';

    interface DesktopNotifProps {
        delay: number,
        duration: number
    }

    const props = defineProps<DesktopNotifProps>();

    const isHidden:Ref<boolean> = ref<boolean>(true);

    function showNotif(): void {
        isHidden.value = false;
        setTimeout(hideNotif, props.duration);
    }

    function hideNotif(): void {
        isHidden.value = true;
    }

    onMounted(() => {
        setTimeout(showNotif, props.delay);
    });

</script>