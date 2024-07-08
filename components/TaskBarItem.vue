<template>
<div>
    <img :src="props.iconPath"/>
</div>
</template>

<script setup lang="ts">
interface TaskBarProps {
    iconPath: string,
    altText: string
}

const props = defineProps<TaskBarProps>();

</script>