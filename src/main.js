import { registerPlugins } from './plugins/index.js'

import App from './App.vue'

import { createApp } from 'vue'

import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
