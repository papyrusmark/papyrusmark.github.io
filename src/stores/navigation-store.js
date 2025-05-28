import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navigationItems: [
      { title: 'Ana Sayfa', to: '/' },
      { title: 'Hakkımızda', to: '/' },
      { title: 'İletişim', to: '/' }
    ]
  }),
  getters: {
    items: (state) => state.navigationItems
  }
})