import axios from '@/plugins/axios';

const API_URL = '/api/properties';
export default {
  fetchProperties(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllProperties() {
    return axios.get(`${API_URL}/all`);
  },
  createProperty(property) {
    return axios.post(API_URL, property);
  },

  updateProperty(property) {
    return axios.put(`${API_URL}/${property.id}`, property);
  },


  deleteProperty(propertyId) {
    return axios.delete(`${API_URL}/${propertyId}`);
  },

};
