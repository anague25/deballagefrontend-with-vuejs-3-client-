import axios from '@/plugins/axios';

const API_URL = '/api/neighborhoods';
export default {
  fetchNeighborhoods(page = 1,search='') {
    return axios.get(API_URL, {
      params: {
        page: page,
        query:search
      }
    });
  },

  fetchAllNeighborhoods() {
    return axios.get(`${API_URL}/all`);
  },
  createNeighborhood(neighborhood) {
    return axios.post(API_URL, neighborhood);
  },

  // updateCategory(category) {
  //   // console.log(category.get('id'));
  //   id = category.get('id');
  //   console.log(id);
  //   return axios.post(`${API_URL}/${m}`, category);
  // },

  updateNeighborhood(neighborhood) {
    // console.log(neighborhood)
    return axios.put(`${API_URL}/${neighborhood.id}`, neighborhood);
  },


  deleteNeighborhood(neighborhoodId) {

    // console.log('dele')
    return axios.delete(`${API_URL}/${neighborhoodId}`);
  },

};
