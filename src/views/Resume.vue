<template>
    <v-responsive class="px-3 py-4">
        <v-sheet border elevation="2" class="py-4 px-4 resume-sheet">
            <v-row class="resume-header-row">
                <v-col>
                    <span class="text-h6 text-md-h5 pr-6" id="resume-name">
                        Zak Grumbles
                    </span>
                </v-col>
            </v-row>
            <v-row dense class="resume-header-row">
                <v-col>
                    <span class="text-h6 text-md-h5" id="resume-title">
                        Software Engineer III
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
                        <v-col cols="4">
                            <span class="text-h6 resume-section-header pr-6">
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
                        <v-col cols="4">
                            <span class="text-h6 resume-section-header pr-6">
                                Experience
                            </span>
                        </v-col>
                    </v-row>
                    <v-row dense v-for="exp in experience">
                        <v-col>
                            <v-row dense>
                                <v-col>
                                    <span class="font-weight-medium">
                                        {{ exp.date }}, {{ exp.company }}
                                    </span>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col>
                                    <span class="font-italic">
                                        {{ exp.title }}
                                    </span>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col class="mx-6">
                                    <ul class="exp-items">
                                        <li v-for="item in exp.items">
                                            {{ item }}
                                        </li>
                                    </ul>
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

const experience = ref([
    {
        date: 'Jun 2017 - present',
        company: 'CAPSHER Technology',
        title: 'Implementation Lead',
        items: [
            'Led a team that contributed to the modernization of a globally-deployed \
            legacy software system by integrating it with Docker and Azure technologies. \
            This allowed us to gather better insights into system performance as well as saved \
            us time during deployments.',
            'UI/UX development using Typescript and Vue with Vuetify',
            'Cross-platform mobile application development with Flutter',
            'UI design for proof-of-concept mobile applications',
            'Led development teams through the software development life cycle \
            on five complex projects, delivering custom and exceptional products \
            to our clients.',
            'Worked directly with consultants, software architects, and clients \
            to transform the client\'s real-world needs into technical solutions.',
            'Mentored entry-level developers in the software development process \
            and best-practices, several of which have gone on to lead teams of \
            their own.'
        ]
    }
])

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