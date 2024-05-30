import toast from '@/plugins/Notification';
import shopsService from '@/services/shops/shopsService';

const state = {
  shops: [],
  allShops: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  shops: (state) => state.shops,
  allShops: (state) => state.allShops,
  shopById: (state) => (id) => state.shops.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setShops(state, { data, meta }) {
    state.shops = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllShops(state,{data}){
    state.allShops = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addShop(state, shop) {
    state.shops.push(shop);
  },
  updateShop(state, updatedShop) {
    const index = state.shops.findIndex(attr => attr.id === updatedShop.id);
    if (index !== -1) {
      state.shops.splice(index, 1, updatedShop);
    }
  },
  deleteShop(state, ShopId) {
    state.shops = state.shops.filter(attr => attr.id !== ShopId);
  }
};

const actions = {
  async fetchShops({ commit }, {page = 1,search}) {
    try {
      const response = await shopsService.fetchShops(page,search);
      commit('setShops', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllShops({ commit }) {
    try {
      const response = await shopsService.fetchAllShops();
      console.log(response.data);
      commit('setAllShops', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all shops');
    }
  },

  async createShop({ commit }, shop) {
    try {
      const response = await shopsService.createShop(shop);
      commit('addShop', response.data);
      toast.success('Shops created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateShop({ commit, dispatch, state }, shop) {
    try {
        const response = await shopsService.updateShop(shop);
        commit('updateShop', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchShops', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteShop({ commit }, shop) {
    try {
      await shopsService.deleteShop(shop);
      commit('deleteShop', shop);
      toast.success('Shops deleted successfully');
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
