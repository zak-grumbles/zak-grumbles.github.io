<template>
    <v-responsive class="px-3 py-4">
        <v-sheet border elevation="2" class="py-4 px-4 resume-sheet">
            <v-row class="resume-header-row">
                <v-col>
                    <span class="text-h5 text-lg-h4 pr-6" id="resume-name">
                        Zak Grumbles
                    </span>
                </v-col>
            </v-row>
            <v-row dense class="resume-header-row">
                <v-col>
                    <div class="text-h5 text-lg-h4">
                        Software Engineer III
                    </div>
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
                        <span class="text-h6">
                            About Me
                        </span>
                    </v-row>
                    <v-row dense>
                        I’m a software engineer from Austin, Texas currently working
                        in software consulting as an implementation lead. I’m passionate about
                        streamlining the development process by finding the right tools and people for the job.
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row dense>
                        <span class="text-h6">
                            Experience
                        </span>
                    </v-row>
                </v-col>
            </v-row>
        </v-sheet>
    </v-responsive>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import "@/styles/settings.scss";

.resume-header-row {
    & #resume-name {
        color: $base-orange;
        border-bottom: 2px solid $base-green;
    }

    & .text-h5 {
        color: $green-dark;
    }
}

.text-h6 {
    color: $base-green;
}

.v-divider {
    color: $base-green;
}
</style>