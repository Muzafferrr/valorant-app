import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
const vuetify = createVuetify({
  components,
  icons: {
    defaultSet: 'mdi'
  }
})

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
