<template>
    <div class="bg-stone rounded-lg shadow-lg shadow-black h-full">
        <div v-if="$slots.appbar" class="m-0 px-2 pb-1 rounded-t-lg bg-slate-500">
            <slot name="appbar" />
        </div>
        <div class="px-2 text-subtle-gray">
            <slot/>
        </div>
    </div>
</template>