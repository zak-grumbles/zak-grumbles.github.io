<template>
    <div class="w-full h-full bg-street bg-cover bg-center">
        <DesktopBar>
            <DesktopApp :icon-path="zg" alt-text="Zak Grumbles" />
            <DesktopApp :icon-path="tg" alt-text="terrain-gen" @click="toggleTGWindow" />
        </DesktopBar>
        <NotificationTray>
            <DesktopNotif :delay=3500 :duration=7500>Hi!</DesktopNotif>
            <DesktopNotif :delay=7500 :duration=7500>
                I'm not really sure how you made it to my desktop...
            </DesktopNotif>
        </NotificationTray>
        <div class="ml-sidebar py-4 px-4 h-full">
            <AppWindow v-for="proj in projects" class="transition-transform ease-out duration-200" :class="{ 'scale-0': proj.isOpen }">
                <template v-slot:appbar>
                    <span class="text-white pl-2">{{ proj.title }} Project Info</span>
                </template>
                <div class="py-2 px-2">
                    <div class="text-2xl text-subtle-gray">{{ proj.title }}</div>
                    <img v-if="proj.screenshot" :src="proj.screenshot" class="pb-2" />
                    <p>
                        Terrain-Gen started as the final project for my graphics course,
                        which was longer ago than I'd like to admit. In a nutshell, the
                        application uses noise to generate terrain. It was originally written
                        in immediate mode OpenGL and utilized an un-threaded implementation of
                        the marching cubes algorithm. It was <span class="italic">slow</span>.
                    </p>
                    <br />
                    <p>
                        It has recently been re-written in more modern C++ and utilizes the QT Framework
                        for its user interface. Noise generation is now customizable via a node graph.
                        It's still a work in progress and there are quite a few features I want to add,
                        but I'm quite proud of how far it's come.
                    </p>
                    <br />
                    <div>
                        <div class="text-xl text-subtle-gray underline">Tech Stack</div>
                        <div class="pt-1">
                            <i v-for="t in proj.stack" class="text-5xl font-extrabold px-1" :key="t" :class="['devicon-' + t]"/>
                        </div>
                    </div>
                </div>
            </AppWindow>
        </div>
    </div>
</template>

<script setup lang="ts">
import zg from "~/assets/zg.svg";
import tg from "~/assets/tg.svg";

interface Project {
    title: string,
    screenshot?: string,
    stack: string[],
    isOpen: boolean
}

const projects: Ref<Project[]> = ref<Project[]>([
    {
        title: 'Terrain-Gen',
        screenshot: 'terrain-gen.png',
        stack: [
            'cplusplus-plain',
            'qt-original',
            'opengl-plain'
        ],
        isOpen: false
    }
])

const isHidden: Ref<boolean> = ref<boolean>(true);

function toggleTGWindow(): void {
    isHidden.value = !isHidden.value;
}


</script>