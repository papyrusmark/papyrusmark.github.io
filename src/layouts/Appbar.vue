<template>
  <v-app-bar color="#0E1424" elevation="0" flat height="85">
    <template #prepend>
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
    </template>

    <template v-if="$vuetify.display.mdAndUp">
      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-4">
        <v-img :src="logo" alt="Logo" contain min-width="150" width="200"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="d-flex ga-4 mx-auto">
        <v-btn
          v-for="item in navigationStore.navigationItems"
          :key="item"
          class="text-none"
          :text="item.title"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn class="px-5 py-2 text-capitalize mr-4" rounded color="white" variant="tonal">
        Download
      </v-btn>
      <v-spacer></v-spacer>
    </template>

    <template v-else>
      <v-toolbar-title class="d-flex justify-center mr-15">
        <v-img :src="logo" alt="Logo" contain min-width="150" width="200"></v-img>
      </v-toolbar-title>
    </template>
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
