<template>
  <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
    <v-list nav>
      <v-list-item
        v-for="item in navigationStore.navigationItems"
        :key="item"
        link
        :title="item.title"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useNavigationStore } from '@/stores/navigation-store.js'
import logo from '@/assets/svg/logo.svg'

export default {
  name: 'HeaderBar',
  data() {
    return {
      logo,
      navigationStore: useNavigationStore(),
    }
  },
}
</script>
