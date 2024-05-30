import axios from '@/plugins/axios';

const API_URL = '/api/productImages';
export default {
  fetchProductImages(page = 1,search='') {
    return axios.get(`${API_URL}/${productId}`, {
      params: {
        page: page,
        query:search
      }
    });
  },

  createProductImage(product,productId) {
    return axios.post(`${API_URL}/${productId}`, product);
  },

  updateProductImage(property) {
    return axios.put(`${API_URL}/${property.id}`, property);
  },


  deleteProductImage(propertyId) {
    return axios.delete(`${API_URL}/${propertyId}`);
  },

};
