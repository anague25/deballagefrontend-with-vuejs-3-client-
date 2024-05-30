import axios from '@/plugins/axios';

const API_URL = '/api/shops';
export default {
  fetchShops(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllShops() {
    return axios.get(`${API_URL}/all`);
  },
  createShop(Shop) {
    return axios.post(API_URL, Shop);
  },

  // updateShop(shop) {
  //   // console.log(shop.get('id'));
  //   id = shop.get('id');
  //   console.log(id);
  //   return axios.post(`${API_URL}/${m}`, shop);
  // },

  updateShop(shop) {
    const id = shop.get('id');  // Assurez-vous que l'ID est correctement récupéré du formulaire
    return axios.post(`${API_URL}/${id}`, shop);
  },


  deleteShop(shopId) {
    return axios.delete(`${API_URL}/${shopId}`);
  },

};
