import router from './router/index.js'
import pinia from './pinia/index.js'
import vuetify from './vuetify/index.js'
import i18n from './i18n/index.js'

export function registerPlugins(app) {
  app.use(router)
  app.use(pinia)
  app.use(vuetify)
  app.use(i18n)
}
