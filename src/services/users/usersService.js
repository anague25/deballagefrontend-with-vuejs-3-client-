import axios from '@/plugins/axios';

const API_URL = '/api/users';

export default {
  fetchUsers(page = 1,search='') {
    return axios.get(`${API_URL}/index`, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllUsers() {
    // console.log('all user');
    return axios.get(`${API_URL}/all`);
  },


  fetchUser(userId) {
    return axios.get(`${API_URL}/${userId}`);
  },

  createUser(user) {
    console.log('creer un utilisateur');
    return axios.post('/api/users/register', user);
  },
  updateUser(user) {
    const id = user.get('id');
    return axios.post(`${API_URL}/${id}`, user);
  },
  deleteUser(userId) {
    return axios.delete(`${API_URL}/${userId}`);
  },



};
