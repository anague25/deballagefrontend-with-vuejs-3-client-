import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Remplacez par l'URL de votre API
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
