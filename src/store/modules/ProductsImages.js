import toast from '@/plugins/Notification';
import productsImagesService from '@/services/productsImages/productsImagesService';

const state = {
  productsImages: [],
  allProductsImages: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  productsImages: (state) => state.productsImages,
  allProductsImages: (state) => state.allProductsImages,
  productsImageById: (state) => (id) => state.productsImages.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setProductsImages(state, { data, meta }) {
    state.productsImages = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllProductsImages(state,{data}){
    state.allProductsImages = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addProductsImage(state, productsImage) {
    state.productsImages.push(productsImage);
  },
  updateProductsImage(state, updatedProductsImage) {
    const index = state.productsImages.findIndex(attr => attr.id === updatedProductsImage.id);
    if (index !== -1) {
      state.productsImages.splice(index, 1, updatedProductsImage);
    }
  },
  deleteProductsImage(state, ProductsImageId) {
    state.productsImages = state.productsImages.filter(attr => attr.id !== ProductsImageId);
  }
};

const actions = {
  async fetchProductsImages({ commit }, {page = 1,search}) {
    try {
      const response = await productsImagesService.fetchProductsImages(page,search);
      commit('setProductsImages', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllProductsImages({ commit }) {
    try {
      const response = await productsImagesService.fetchAllProductsImages();
      console.log(response.data);
      commit('setAllProductsImages', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all productsImages');
    }
  },

  async createProductsImage({ commit }, productsImage) {
    try {
      const response = await productsImagesService.createProductsImage(productsImage);
      commit('addProductsImage', response.data);
      toast.success('ProductsImages created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateProductsImage({ commit, dispatch, state }, productsImage) {
    try {
        const response = await productsImagesService.updateProductsImage(productsImage);
        commit('updateProductsImage', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchProductsImages', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
        if (error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors;
        }
    }
}
,
  async deleteProductsImage({ commit }, productsImage) {
    try {
      await productsImagesService.deleteProductsImage(productsImage);
      commit('deleteProductsImage', productsImage);
      toast.success('ProductsImages deleted successfully');
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
