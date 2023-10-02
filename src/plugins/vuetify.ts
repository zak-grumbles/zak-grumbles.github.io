/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ffffff',      // white
    surface: '#ffffff',         // white
    primary: '#606c38',         // base-green
    'primary-dark': '#283618',  // green-dark
    'primary-warm': '#fefae0',  // white-warm
    secondary: '#dda15e',       // base-tan
    accent: '#bc6c25',          // base-orange
    contrast: '#606c38'
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#212121',
    surface: '#ffffff',         // white
    primary: '#606c38',         // base-green
    'primary-dark': '#283618',  // green-dark
    'primary-warm': '#fefae0',  // white-warm
    secondary: '#dda15e',       // base-tan
    accent: '#bc6c25',          // base-orange
    contrast: '#283618'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      'light': lightTheme,
      'dark': darkTheme
    },
  },
})
