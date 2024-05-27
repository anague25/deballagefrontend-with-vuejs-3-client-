import axios from '@/plugins/axios';

const API_URL = '/api/cities';
export default {
  fetchCities(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllCities() {
    return axios.get(`${API_URL}/all`);
  },
  createCity(city) {
    console.log(city.get('name'));
    return axios.post(API_URL, city);
  },

  updateCity(city) {
    // console.log(id,name); // Assurez-vous que l'ID est correctement récupéré du formulaire
    return axios.put(`${API_URL}/${city.id}`,city);
  },


  deleteCity(cityId) {
    return axios.delete(`${API_URL}/${cityId}`);
  },

};
