import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'
import vueDevTools from 'vite-plugin-vue-devtools'

import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Vuetify(),
    Components({
      dirs: ['src/layouts', 'src/assets', 'src/components'],
    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Space Grotesk Variable',
            weights: [300, 400, 500, 700],
            styles: ['normal'],
          },
        ],
      },
    }),
  ],
  base: './',
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
