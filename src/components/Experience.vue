<template>
    <v-row dense v-bind="props">
        <v-col>
            <v-row dense>
                <v-col>
                    <span class="text-h6">
                        {{ exp.company }}, {{ exp.date }}
                    </span>
                </v-col>
            </v-row>
            <div v-for="role in exp.roles" class="mb-3">
                <v-row dense class="my-0">
                    <v-col>
                        <span class="font-weight-bold">
                            {{ role.title }}
                        </span>
                        <span class="font-weight-bold font-italic">
                            ({{ role.date }})
                        </span>
                    </v-col>
                </v-row>
                <v-row dense class="my-0">
                    <v-col>
                        {{  role.desc }}
                    </v-col>
                </v-row>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>

<script lang="ts" setup>

interface Role {
    title: string,
    date: string,
    desc: string
}

interface Experience {
    company: string,
    date: string,
    roles: Role[]
}

interface ExpProps {
    exp: Experience
}

const props: ExpProps = defineProps<ExpProps>()

</script>