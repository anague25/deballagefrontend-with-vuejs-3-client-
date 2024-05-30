import toast from '@/plugins/Notification';
import propertiesService from '@/services/properties/propertiesService';

const state = {
  properties: [],
  allProperties: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  properties: (state) => state.properties,
  allProperties: (state) => state.allProperties,
  propertyById: (state) => (id) => state.properties.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setProperties(state, { data, meta }) {
    state.properties = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllProperties(state,{data}){
    state.allProperties = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addProperty(state, property) {
    state.properties.push(property);
  },
  updateProperty(state, updatedProperty) {
    const index = state.properties.findIndex(attr => attr.id === updatedProperty.id);
    if (index !== -1) {
      state.properties.splice(index, 1, updatedProperty);
    }
  },
  deleteProperty(state, PropertyId) {
    state.properties = state.properties.filter(attr => attr.id !== PropertyId);
  }
};

const actions = {
  async fetchProperties({ commit }, {page = 1,search}) {
    try {
      const response = await propertiesService.fetchProperties(page,search);
      commit('setProperties', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllProperties({ commit }) {
    try {
      const response = await propertiesService.fetchAllProperties();
      console.log(response.data);
      commit('setAllProperties', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all properties');
    }
  },

  async createProperty({ commit }, property) {
    try {
      const response = await propertiesService.createProperty(property);
      commit('addProperty', response.data);
      toast.success('Properties created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateProperty({ commit, dispatch, state }, property) {
    try {
        const response = await propertiesService.updateProperty(property);
        commit('updateProperty', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchProperties', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteProperty({ commit }, property) {
    try {
      await propertiesService.deleteProperty(property);
      commit('deleteProperty', property);
      toast.success('Properties deleted successfully');
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
