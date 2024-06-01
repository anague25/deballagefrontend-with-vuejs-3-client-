import toast from '@/plugins/Notification';
import productsService from '@/services/products/productsService';

const state = {
  products: [],
  allProducts: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  products: (state) => state.products,
  allProducts: (state) => state.allProducts,
  productById: (state) => (id) => state.products.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setProducts(state, { data, meta }) {
    state.products = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllProducts(state,{data}){
    state.allProducts = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addProduct(state, product) {
    state.products.push(product);
  },
  updateProduct(state, updatedProduct) {
    const index = state.products.findIndex(attr => attr.id === updatedProduct.id);
    if (index !== -1) {
      state.products.splice(index, 1, updatedProduct);
    }
  },
  deleteProduct(state, ProductId) {
    state.products = state.products.filter(attr => attr.id !== ProductId);
  }
};

const actions = {
  async fetchProducts({ commit }, {page = 1,search}) {
    try {
      const response = await productsService.fetchProducts(page,search);
      commit('setProducts', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllProducts({ commit }) {
    try {
      const response = await productsService.fetchAllProducts();
      console.log(response.data);
      commit('setAllProducts', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all products');
    }
  },

  async createProduct({ commit }, product) {
    try {
      const response = await productsService.createProduct(product);
      commit('addProduct', response.data);
      toast.success('Products created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateProduct({ commit, dispatch, state }, product) {
    try {
        const response = await productsService.updateProduct(product);
        commit('updateProduct', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchProducts', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteProduct({ commit }, product) {
    try {
      await productsService.deleteProduct(product);
      commit('deleteProduct', product);
      toast.success('Products deleted successfully');
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
