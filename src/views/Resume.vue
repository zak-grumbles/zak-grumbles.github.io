<template>
    <v-responsive class="px-3 py-4">
        <v-sheet border elevation="2" class="py-4 px-4 resume-sheet">
            <v-row class="resume-header-row">
                <v-col>
                    <span class="text-h5 pr-6" id="resume-name">
                        Zak Grumbles
                    </span>
                </v-col>
            </v-row>
            <v-row dense class="resume-header-row">
                <v-col>
                    <span class="text-h5" id="resume-title">
                        Senior Software Engineer
                    </span>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-divider thickness="3" class="mx-1 border-opacity-50"></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-row dense>
                        <v-col>
                            <span class="text-h5 resume-section-header pr-6">
                                About Me
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col>
                            I’m a software engineer from Austin, Texas currently working
                            in software consulting as an implementation lead. I’m passionate about
                            streamlining the development process by finding the right tools and people for the job.
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row dense>
                        <v-col>
                            <span class="text-h5 resume-section-header pr-6">
                                Skills
                            </span>
                        </v-col>
                    </v-row>
                    <v-row class="mt-0">
                        <v-col>
                            <span class="font-weight-medium">
                                Programming Languages
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense class="d-flex">
                        <v-col cols="3" v-for="skill in skills.prog" :key="skill">
                            <span>{{ skill }}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <span class="font-weight-medium">
                                Proficiencies
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense class="d-flex">
                        <v-col xs="5" md="3" v-for="skill in skills.proficiencies" :key="skill">
                            <span>{{ skill }}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <span class="font-weight-medium">
                                Tools & Frameworks
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense class="d-flex">
                        <v-col xs="5" md="3" v-for="skill in skills.tools" :key="skill">
                            <span>{{ skill }}</span>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row dense>
                        <v-col>
                            <span class="text-h5 resume-section-header pr-6">
                                Experience
                            </span>
                        </v-col>
                    </v-row>
                    <Experience v-for="exp in experience" :exp="exp"></Experience>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row dense>
                        <v-col>
                            <span class="text-h6 resume-section-header pr-6">
                                Projects
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense v-for="proj in projects" :key="proj.name">
                        <v-col>
                            <v-row dense>
                                <v-col>
                                    <span class="font-weight-medium">
                                        {{ proj.name }} -
                                    </span>
                                    <span class="font-weight-medium font-italic">
                                        {{ proj.stack }}
                                    </span>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-list lines="one" density="compact">
                                    <v-list-item v-for="desc in proj.description" class="pl-1 py-0" density="compact">
                                        {{ desc }}
                                    </v-list-item>
                                </v-list>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row dense>
                        <v-col>
                            <span class="text-h6 resume-section-header pr-6">
                                Education
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense v-for="edu in education" :key="edu.school">
                        <v-col>
                            <v-row dense>
                                <v-col>
                                    <span class="font-weight-medium mr-2">
                                        {{ edu.school }}, {{ edu.years }}
                                    </span>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col>
                                    <span>
                                        {{ edu.degree }}
                                    </span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-sheet>
    </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Experience from '@/components/Experience.vue';

const experience = ref([
    {
        company: 'CAPSHER Technology',
        date: 'June 2017 - Dec 2023',
        roles: [
            {
                title: 'Implementation Lead',
                date: 'Dec 2020 - Dec 2023',
                desc: 'Responsible for leading the development team through the \
                    software development cycle on projects for a variety of \
                    clients. This includes multiple REST APIs, mobile \
                    applications, web applications, and desktop apps. Mentored \
                    junior developers in software development and project \
                    management, leading to them managing their own teams \
                    successfully.'
            },
            {
                title: 'Software Engineer',
                date: 'June 2017 - Dec 2020',
                desc: 'Worked as part of multiple dev teams to develop\
                    exceptional products for our clients while learning skills\
                    needed to become an implementation lead and high-level\
                    developer.'
            },
            {
                title: 'Software Development Intern',
                date: 'June 2016 - Aug 2016',
                desc: 'Worked with 3 other interns over the summer to develop \
                    an internal management tool for use by other employees.'
            }
        ]
    }
])

const projects = ref([
    {
        name: 'gd_fastnoise2',
        stack: 'C++, GDScript, Godot Engine 4',
        description: [
            'C++ module for the Godot game engine that wraps the \
            FastNoise2 noise generation library, allowing game developers \
            to utilize it in Godot\'s scripting language GDScript'
        ] 
    },
    {
        name: 'Terrain Gen',
        stack: 'C++, OpenGL, QT Framework',
        link: 'github.com/zak-grumbles/terrain-gen',
        description: [
            'Began as a final project for my graphics programming course \
            at university and featured procedural terrain generation using \
            Perlin Noise, the Marching Cubes Algorithm, and immediate mode \
            OpenGL',
            'Ported to QT Framework in 2022 and updated to use moder OpenGL, \
            multiple noise types, and a multi-threaded approach to the \
            Marching Cubes Algorithm.',
            'Updated in 2023 to feature a node based editor for terrain creation.'
        ]
    },
    {
        name: 'zak-grumbles.com (This website!)',
        stack: 'Vue3, Vuetify, Typescript, SCSS',
        link: 'github.com/zak/grumbles/zak-grumbles.github.io',
        description: [
            'This website was built using Vue 3 and Vuetify. \
            Scripting was written in Typescript and the styling was done \
            using SCSS.'
        ]
    }
])

const education = ref([
    {
        school: 'Baylor University',
        years: 'Aug 2013 - May 2017',
        degree: 'BSCS in Computer Science, Concentration: Game Development'
    }
])

const skills = ref({
    prog: [
        'C/C++', 'C#', 'Javascript/Typescript', 'HTML',
        'CSS & SCSS', 'Python', 'SQL',
        'GDScript', 'NodeJS', 'Dart'
    ],
    proficiencies: [
        'Object-Oriented Programming', 'Project Leadership',
        'Code Reviews', 'Mentoring & Training', 'API Development',
        'Full Stack Development', 'UI Design & Development',
        'Agile Development', 'Mobile Development'
    ],
    tools: [
        'VueJS & Vuetify', 'QT Framework', 'Azure CI/CD',
        'Git & Github', 'Windows', 'Linux', 'Unreal Engine 5',
        'Unity', 'Godot Engine 4'
    ]
})

</script>

<style lang="scss" scoped>
@import "@/styles/settings.scss";

.resume-header-row {
    & #resume-name {
        color: $base-orange;
        border-bottom: 2px solid $base-green;
    }

    & #resume-title {
        color: $green-dark;
    }
}

.resume-section-header {
    color: $base-green;
    border-bottom: 2px solid $base-tan;
}

.v-divider {
    color: $base-green;
}
</style>