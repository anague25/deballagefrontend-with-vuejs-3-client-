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
    // console.log(product.get('image'));
    return axios.post(API_URL, product);
  },

  updateProduct(product) {
    const id = product.get('id');
    return axios.post(`${API_URL}/${id}`, product);
  },


  deleteProduct(productId) {
    return axios.delete(`${API_URL}/${productId}`);
  },

};
