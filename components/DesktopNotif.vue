<template>
    <div v-if="created" class="transform ease-in-out duration-300 bg-stone p-3 rounded-md border-plum border" :class="{ 'scale-0': isHidden }">
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

    /**
     * Set to true once the 'delay' timeout executes.
     * This adds it to the flexbox.
     */
    const created:Ref<boolean> = ref<boolean>(false);

    /**
     * Set to true after creation, this triggers the transform transition.
     */
    const isHidden:Ref<boolean> = ref<boolean>(true);
    
    function createNotif(): void {
        created.value = true;
        setTimeout(showNotif, 500);
    }

    function showNotif(): void {
        isHidden.value = false;
        setTimeout(hideNotif, props.duration);
    }

    function hideNotif(): void {
        isHidden.value = true;
    }

    onMounted(() => {
        setTimeout(createNotif, props.delay);
    });

</script>