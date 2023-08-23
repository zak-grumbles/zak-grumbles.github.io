<template>
  <v-app-bar :elevation="2" image="@/assets/bg-forest.jpg">


    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,100,.02), rgba(128,208,199,.2)"></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer != drawer">
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      Zak Grumbles
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon href="https://github.com/zak-grumbles" target="_blank">
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        drawer: false
      }
    }
  })
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
</style>