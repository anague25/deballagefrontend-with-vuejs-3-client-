import axios from '@/plugins/axios';

const API_URL = '/api/products';
export default {
  fetchProducts(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllProducts() {
    return axios.get(`${API_URL}/all`);
  },
  createProduct(product) {
    return axios.post(API_URL, product);
  },

  updateProduct(property) {
    return axios.put(`${API_URL}/${property.id}`, property);
  },


  deleteProduct(propertyId) {
    return axios.delete(`${API_URL}/${propertyId}`);
  },

};
