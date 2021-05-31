import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseComponents from './components/base'
import plugins from '@/plugins'
import directives from '@/directives'

//css import
import 'normalize.css'
import '@/assets/css/base.scss'
import '@/assets/css/main.scss'


const app = createApp(App)

app.use(BaseComponents).use(plugins).use(directives)

app.use(store).use(router).mount('#app')