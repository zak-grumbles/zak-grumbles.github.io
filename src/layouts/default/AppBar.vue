<template>
  <v-app-bar :elevation="2" image="@/assets/bg-forest.jpg">

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </template>

    <v-app-bar-title>
      <span class="d-none d-sm-flex">
        Zak Grumbles
      </span>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn icon href="https://github.com/zak-grumbles" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer temporary v-model="drawer">
    <v-list nav>
      <v-list-item v-for="item in navItems" :key="item.name"
        :title="item.name" :to="item.path" exact>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface NavItem {
  name: string,
  path: string
}

const navItems = ref<NavItem[]>([
  { name: 'Home', path: '/' },
  { name: 'Resume', path: 'resume' },
  { name: 'Projects', path: 'projects' },
  { name: 'About Me', path: 'about' }
])

const drawer = ref(false)

</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";

.v-app-bar-title {
  color: $white-warm;
}

.v-app-bar-nav-icon {
  color: $white-warm;
}

.v-icon {
  color: $white-warm;
}

.v-navigation-drawer {
  background-image: url("@/assets/bg-forest.jpg");
  background-size: cover;

  .v-list {
    background: transparent;
  }
  .v-list-item {
    color: $white-warm;
  }
}
</style>