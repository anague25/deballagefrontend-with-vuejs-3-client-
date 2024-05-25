import axios from '@/plugins/axios';

const API_URL = '/api/attributes';

export default {
  fetchAttributes(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },
  createAttribute(attribute) {
    return axios.post(API_URL, attribute);
  },
  updateAttribute(attribute) {
    return axios.put(`${API_URL}/${attribute.id}`, attribute);
  },
  deleteAttribute(attributeId) {
    return axios.delete(`${API_URL}/${attributeId}`);
  },



};