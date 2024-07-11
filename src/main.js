import 'tom-select/dist/css/tom-select.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './plugins/axios';

const app = createApp(App)

app.config.globalProperties.$axios = axios; // Ajoutez Axios aux propriétés globales
const token = localStorage.getItem('access_token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

app.use(router)
app.use(store)// Utilisez le store Vuex


app.mount('#app')
