import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

const app = createApp(App)
setupRouter(app)
setupStore(app)

app.mount('#app')