import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
