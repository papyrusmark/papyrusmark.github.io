import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navigationItems: [
      { title: 'Home', to: '/' },
      { title: 'About', to: '/' },
      { title: 'Contact', to: '/' }
    ]
  }),
  getters: {
    items: (state) => state.navigationItems
  }
})