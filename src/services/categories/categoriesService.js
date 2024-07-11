import axios from '@/plugins/axios';

const API_URL = '/api/categories';
export default {
  fetchCategories(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllCategories() {
    return axios.get(`${API_URL}/all`);
  },

  createCategory(Category) {
    return axios.post(API_URL, Category);
  },

  fetchSubCategoriesByCategory(categoryId) {
    return axios.get(`${API_URL}/${categoryId}`);
  },

  // updateCategory(category) {
  //   // console.log(category.get('id'));
  //   id = category.get('id');
  //   console.log(id);
  //   return axios.post(`${API_URL}/${m}`, category);
  // },

  updateCategory(category) {
    const id = category.get('id');  // Assurez-vous que l'ID est correctement récupéré du formulaire
    return axios.post(`${API_URL}/${id}`, category);
  },


  deleteCategory(categoryId) {
    return axios.delete(`${API_URL}/${categoryId}`);
  },

};
