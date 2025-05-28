<template>
  <v-app-bar app color="#0E1424" elevation="0" height="85">
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon class="d-sm-none d-md-none" />
    <v-toolbar-title class="ml-4">
      <v-img :src="logo" alt="Openup Logo" contain min-width="100" width="200"></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="d-none d-md-flex align-center justify-center flex-grow-0">
      <v-btn
        v-for="(item, index) in navigationStore.items"
        :key="index"
        text
        :to="item.to"
        exact
        class="text-capitalize px-7"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    
        <v-img
      class="d-inline-flex d-md-none mr-4"
      :src="logo"
      alt="Openup Logo Small"
      contain
      height="40"
      width="120"
    />
    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-btn
      class="d-none d-md-inline-flex px-5 py-2 text-capitalize mr-4"
      rounded
      color="white"
      variant="tonal"
    >
      Download
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue'
import { useNavigationStore } from '@/stores/navigation-store.js'
import logo from '@/assets/svg/logo.svg'

export default defineComponent({
  name: 'HeaderBar',
  data() {
    return {
      logo,
      navigationStore: useNavigationStore(),
    }
  },
})
</script>
