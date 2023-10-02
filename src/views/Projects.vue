<template>
    <v-responsive class="px-3 py-4">
        <v-card border elevation="2" class="py-4 px-4 mb-4" v-for="proj in projects" :key="proj.name">
            <div class="d-flex project-title" align="center" no-gutters>
                <div class="me-auto">
                    <span class="text-h6 text-lg-h4">{{ proj.name }}</span>
                </div>
                <div>
                    <i v-for="icon in proj.stackIcons" :key="icon" :class="['devicon-' + icon, 'project-tech']"
                        class="mx-xs-1 mx-sm-2 mx-md-4" />
                </div>
            </div>
            <div class="d-flex flex-wrap">
                <div v-if="proj.screenshot" class="flex-0-0-100" max-width="50%">
                    <v-img :src="proj.screenshot" aspect-ratio="16/9"></v-img>
                </div>
                <div>
                    <p v-for="(paragraph, index) in proj.info" :key="paragraph"
                        :class="[index !== proj.info.length ? 'mb-4' : '', 'project-info']">
                        <span v-html="paragraph"></span>
                    </p>
                </div>
            </div>
        </v-card>
    </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import tgScreenshot from '@/assets/terrain-gen.png'

interface Project {
    name: string,
    stackIcons: string[],
    screenshot?: string,
    info: string[]
}

const projects = ref<Project[]>([
    {
        name: 'Terrain-Gen',
        stackIcons: [
            'opengl-plain',
            'qt-original'
        ],
        screenshot: tgScreenshot,
        info: [
            'Terrain-Gen started as a final projects for my graphics course, which was longer \
            ago than I would like to admit. In a nutshell, the application uses noise to generate terrain. \
            It was originally written in immediate mode OpenGL and utilized an un-threaded implementation \
            of the marching cubes algorithm. It was <span class="font-italic">slow</span>.',
            'It has recently been re-written in more modern C++ and utilizes the QT Framework for its \
            user interface. Noise generation is now customizable via a node graph. It\'s still a work in \
            progress and there are quite a few features I want to add, but I\'m quite proud of how far it\'s \
            come.'
        ]
    },
    {
        name: 'zak-grumbles.com',
        stackIcons: [
            'vuejs-plain',
            'vuetify-line',
            'typescript-plain'
        ],
        info: [
            'My personal website has gone through several iterations, some better than others. \
            This iteration was built using <a href="https://vuejs.org" target="_blank">Vue 3</a>, \
            <a href="https://vuetifyjs.com" target="_blank">Vuetify</a>, and \
            <a href="https://typescriptlang.org" target="_blank">Typescript</a>.'
        ]
    }
])
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";

.project-title {
    color: rgb(var(--v-theme-primary));
    border-bottom: 2px solid rgb(var(--v-theme-secondary));
}

.project-tech {
    font-size: 2em;
}

a {
    color: rgb(var(--v-theme-accent));
    text-decoration-color: rgb(var(--v-theme-primary));

}

a:active,
a:visited {
    color: rgb(var(--v-theme-primary-dark));
    text-decoration-color: rgb(var(--v-theme-accent));
}
</style>