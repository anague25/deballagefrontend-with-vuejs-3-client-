import attributeService from '@/services/attributes/attributeService';
import toast from '@/plugins/Notification';

const state = {
  attributes: [],
  currentPage: 1,
  totalPages: 0,
  totalAttributes: 0,
  attributesPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  allAttributes: (state) => state.attributes,
  attributeById: (state) => (id) => state.attributes.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalAttributes: (state) => state.totalAttributes,
  attributesPerPage: (state) => state.attributesPerPage,
};

const mutations = {
  setAttributes(state, { data, meta }) {
    state.attributes = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalAttributes = meta.total;
    state.attributesPerPage = meta.per_page; // Récupération dynamique
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addAttribute(state, attribute) {
    state.attributes.push(attribute);
  },
  updateAttribute(state, updatedAttribute) {
    const index = state.attributes.findIndex(attr => attr.id === updatedAttribute.id);
    if (index !== -1) {
      state.attributes.splice(index, 1, updatedAttribute);
    }
  },
  deleteAttribute(state, attributeId) {
    state.attributes = state.attributes.filter(attr => attr.id !== attributeId);
  }
};

const actions = {
  async fetchAttributes({ commit }, {page = 1,search}) {
    try {
      const response = await attributeService.fetchAttributes(page,search);
      commit('setAttributes', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },
  async createAttribute({ commit }, attribute) {
    try {
      const response = await attributeService.createAttribute(attribute);
      commit('addAttribute', response.data);
      toast.success('Attribute created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }
      toast.error('Failed to create attribute');
    }
  },

  async updateAttribute({ commit, dispatch, state }, attribute) {
    try {
        const response = await attributeService.updateAttribute(attribute);
        commit('updateAttribute', response.data);
        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchAttributes', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteAttribute({ commit }, attributeId) {
    try {
      await attributeService.deleteAttribute(attributeId);
      commit('deleteAttribute', attributeId);
      toast.success('Attribute deleted successfully');
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
