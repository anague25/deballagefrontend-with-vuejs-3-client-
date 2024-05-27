import toast from '@/plugins/Notification';
import citiesService from '@/services/cities/citiesService';

const state = {
  cities: [],
  allCities: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour
  path:'http://127.0.0.1:8000/storage/',

};

const getters = {
  cities: (state) => state.cities,
  allCities: (state) => state.allCities,
  cityById: (state) => (id) => state.cities.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setCities(state, { data, meta }) {
    state.cities = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllCities(state,{data}){
    state.allCities = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addCity(state, city) {
    state.cities.push(city);
  },
  updateCity(state, updatedCity) {
    const index = state.cities.findIndex(attr => attr.id === updatedCity.id);
    if (index !== -1) {
      state.cities.splice(index, 1, updatedCity);
    }
  },
  deleteCity(state, cityId) {
    state.cities = state.cities.filter(attr => attr.id !== cityId);
  }
};

const actions = {
  async fetchCities({ commit }, {page = 1,search}) {
    try {
      const response = await citiesService.fetchCities(page,search);
      commit('setCities', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
     console.log(error);
    }
  },

  async fetchAllCities({ commit }) {
    try {
      const response = await citiesService.fetchAllCities();
      console.log(response.data);
      commit('setAllCities', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async createCity({ commit }, city) {
    try {
      const response = await citiesService.createCity(city);
      commit('addCity', response.data);
      toast.success('city created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateCity({ commit, dispatch, state }, city) {
    try {
        const response = await citiesService.updateCity(city);
        commit('updateCity', response.data);

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchCities', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          console.log(error);
            throw error.response.data.errors;
        }
    }
}
,
  async deleteCity({ commit }, cityId) {
    try {
      await citiesService.deleteCity(cityId);
      commit('deleteCity', cityId);
      toast.success('City deleted successfully');
    } catch (error) {
      toast.error('Failed to delete attribute');
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
