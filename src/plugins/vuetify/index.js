import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#5C4CFF',
          secondary: '#99A1FE',
          background: '#FFFFFF',
          transparency: '#82bc0000',
          soft: '#F7F7F7',
          softin: '#3c3c3c',
          lightgrey: '#4B4B4B',
          danger: '#ff4b4b',
        },
      },
    },
  },
})
