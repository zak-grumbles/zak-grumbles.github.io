<template>
    <v-container class="d-flex flex-column flex-sm-row justify-center">
        <NavCard :background="resumeImg" title="Resume" to="/resume"/>
        <NavCard :background="projectsImg" title="Projects"/>
        <NavCard :background="aboutImg" title="About Me" />
    </v-container>
</template>

<style scoped lang="scss">
</style>

<script lang="ts" setup>
import NavCard from '@/components/NavCard.vue'

import resumeImg from '@/assets/resume.jpg'
import projectsImg from '@/assets/projects.jpg'
import aboutImg from '@/assets/about.jpg'
</script>