import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { VBtn, VCard } from 'vuetify/components'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#006AFF',
          secondary: '#00B2FF',
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
  aliases: {
    VBtnPrimary: VBtn,
    VBtnOutlined: VBtn,
    VCardContent: VCard,
  },
  defaults: {
    VCardContent: {
      elevation: 0,
      rounded: 'lg',
      border: 'sm',
      class: 'pa-5',
    },
    VBtnPrimary: {
      variant: 'flat',
      ripple: false,
      color: 'primary',
      elevation: 0,
      class: 'text-subtitle-1',
      rounded: 'lg',
    },
    VBtnOutlined: {
      variant: 'outlined',
      ripple: false,
      elevation: 0,
      class: 'text-subtitle-1',
      rounded: 'lg',
    },
  },
})
