import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Importing Vuex store
import store from './store'

createApp(App).store(store).use(router).mount('#app')