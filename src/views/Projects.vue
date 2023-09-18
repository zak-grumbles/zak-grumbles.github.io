<template>
    <v-responsive class="px-3 py-4">
        <v-card border elevation="2" class="py-4 px-4" v-for="proj in projects" :key="proj.name">
            <v-row class="project-title" align="center" no-gutters>
                <v-col>
                    <span class="text-h4">{{ proj.name }}</span>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="1" v-for="icon in proj.stackIcons" :key="icon">
                    <i :class="['devicon-' + icon, 'project-tech']" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="7" v-if="proj.screenshot">
                    <v-img :src="proj.screenshot" cover></v-img>
                </v-col>
                <v-col>
                    <p v-for="(paragraph, index) in proj.info" :key="paragraph"
                        :class="[index !== proj.info.length ? 'mb-4' : '', 'project-info']">
                        <span v-html="paragraph"></span>
                    </p>
                </v-col>
            </v-row>
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
    }
])
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";

.project-title {
    color: $base-green;
    border-bottom: 2px solid $base-tan;
}

.project-tech {
    font-size: 4em;
}
</style>