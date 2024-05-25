import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './plugins/axios';

const app = createApp(App)

app.config.globalProperties.$axios = axios; // Ajoutez Axios aux propriétés globales

app.use(router)
app.use(store)// Utilisez le store Vuex


app.mount('#app')
