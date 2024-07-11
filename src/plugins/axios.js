import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Remplacez par l'URL de votre API
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
  }
});


// Ajouter un intercepteur pour l'en-tête d'autorisation
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
