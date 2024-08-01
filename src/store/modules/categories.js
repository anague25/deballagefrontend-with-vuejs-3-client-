import toast from '@/plugins/Notification';
import categoriesService from '@/services/categories/categoriesService';
import citiesService from '@/services/cities/citiesService';

const state = {
  categories: [],
  subCategoriesByCategory: {},
  allCategories: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour
  path:'http://127.0.0.1:8000/storage/',

};

const getters = {
  subCategoriesByCategory: (state) => state.subCategoriesByCategory,
  categories: (state) => state.categories,
  allCategories: (state) => state.allCategories,
  categoryById: (state) => (id) => state.categories.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
  getPath: (state) => state.path,
};

const mutations = {
  setSubCategoriesByCategory(state, { categoryId, subCategories }) {
    state.subCategoriesByCategory = {
      ...state.subCategoriesByCategory,
      [categoryId]: subCategories,
    };
  },

  setCategories(state, { data, meta }) {
    state.categories = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllCategories(state,{data}){
    state.allCategories = data;
  },
 
    setCurrentPageBeforeUpdate(state, page) {
      state.currentPageBeforeUpdate = page;
    },
  
  
  addCategory(state, category) {
    state.categories.push(category);
  },
  updateCategory(state, updatedCategory) {
    const index = state.categories.findIndex(attr => attr.id === updatedCategory.id);
    if (index !== -1) {
      state.categories.splice(index, 1, updatedCategory);
    }
  },
  deleteCategory(state, categoryId) {
    state.categories = state.categories.filter(attr => attr.id !== categoryId);
  }
};

const actions = {
  async fetchSubCategoriesByCategory({ commit }, categoryId) {
    try {
      const response = await categoriesService.fetchSubCategoriesByCategory(categoryId);
      console.log(response);
      commit('setSubCategoriesByCategory', { categoryId, subCategories: response.data.data.children });
    } catch (error) {
      console.error(error);
    }
  },


  async fetchCategories({ commit }, {page = 1,search}) {
    try {
      const response = await categoriesService.fetchCategories(page,search);
      commit('setCategories', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllCategories({ commit }) {
    try {
      const response = await categoriesService.fetchAllCategories();
      commit('setAllCategories', response.data);
    } catch (error) {
      console.log(error);

      toast.error('Failed to fetch all categories');
    }
  },

  async createCategory({ commit }, category) {
    try {
      const response = await categoriesService.createCategory(category);
      commit('addCategory', response.data);
      toast.success('Category created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }else{
        console.log(error);
      }
    }
  },

  async updateCategory({ commit, dispatch, state }, category) {
    try {
        const response = await categoriesService.updateCategory(category);
        commit('updateCategory', response.data);
        // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

        // Mettre à jour la liste des attributs pour refléter les changements
        await dispatch('fetchCategories', { page: state.currentPage, search: '' });
        return response.data; // Retourne les données mises à jour
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          console.log(error);
            throw error.response.data.errors;
        }
    }
}
,
  async deleteCategory({ commit }, categoryId) {
    try {
      await categoriesService.deleteCategory(categoryId);
      commit('deleteCategory', categoryId);
      toast.success('Category deleted successfully');
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
