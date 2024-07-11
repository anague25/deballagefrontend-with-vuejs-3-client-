import toast from '@/plugins/Notification';
import neighborhoodsService from '@/services/neighborhoods/neighborhoodsService';
import citiesService from '@/services/cities/citiesService';


const state = {
  neighborhoodsByCity:{},
  neighborhoods: [],
  allNeighborhoods: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour
  path:'http://127.0.0.1:8000/storage/',

};

const getters = {
  neighborhoodsByCity: (state) => state.neighborhoodsByCity,
  neighborhoods: (state) => state.neighborhoods,
  allNeighborhoods: (state) => state.allNeighborhoods,
  neighborhoodById: (state) => (id) => state.neighborhoods.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setNeighborhoodsByCity(state, { cityId, neighborhoods }) {
    state.neighborhoodsByCity = {
      ...state.neighborhoodsByCity,
      [cityId]: neighborhoods,
    };
  },
  setNeighborhoods(state, { data, meta }) {
    state.neighborhoods = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllNeighborhoods(state,{data}){
    state.allNeighborhoods = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addNeighborhood(state, neighborhood) {
    state.neighborhoods.push(neighborhood);
  },
  updateNeighborhood(state, updatedNeighborhood) {
    const index = state.neighborhoods.findIndex(attr => attr.id === updatedNeighborhood.id);
    if (index !== -1) {
      state.neighborhoods.splice(index, 1, updatedNeighborhood);
    }
  },
  deleteNeighborhood(state, NeighborhoodId) {
    state.neighborhoods = state.neighborhoods.filter(attr => attr.id !== NeighborhoodId);
  }
};

const actions = {
  async fetchNeighborhoodsByCity({ commit }, cityId) {
    try {
      const response = await citiesService.fetchNeighborhoodsByCity(cityId);
      console.log(response);
      commit('setNeighborhoodsByCity', { cityId, neighborhoods: response.data.data.neighborhoods });
    } catch (error) {
      console.error(error);
    }
  },





  async fetchNeighborhoods({ commit }, {page = 1,search}) {
    try {
      const response = await neighborhoodsService.fetchNeighborhoods(page,search);
      commit('setNeighborhoods', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllNeighborhoods({ commit }) {
    try {
      const response = await neighborhoodsService.fetchAllNeighborhoods();
      console.log(response.data);
      commit('setAllNeighborhoods', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all neighborhoods');
    }
  },

  async createNeighborhood({ commit }, neighborhood) {
    try {
      const response = await neighborhoodsService.createNeighborhood(neighborhood);
      commit('addNeighborhood', response.data);
      toast.success('Neighborhood created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateNeighborhood({ commit, dispatch, state }, neighborhood) {
    try {
        const response = await neighborhoodsService.updateNeighborhood(neighborhood);
        commit('updateNeighborhood', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchNeighborhoods', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteNeighborhood({ commit }, neighborhood) {
    try {
      await neighborhoodsService.deleteNeighborhood(neighborhood);
      commit('deleteNeighborhood', neighborhood);
      toast.success('NeighborhoodId deleted successfully');
    } catch (error) {
     console.log(error);
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
