import axios from '@/plugins/axios';

const API_URL = '/api/users';

export default {
  login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  },
  fetchUser() {
    return axios.get(`${API_URL}/auth`);
  },
  logout() {
    return axios.post(`${API_URL}/logout`);
  },
};
