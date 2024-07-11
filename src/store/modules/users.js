import toast from '@/plugins/Notification';
import usersService from '@/services/users/usersService';


const state = {
  users: [],
  allUsers: [],
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  elementsPerPage: 0,
  currentPageBeforeUpdate: 1, // Nouvel état pour stocker la page actuelle avant la mise à jour

};

const getters = {
  users: (state) => state.users,
  allUsers: (state) => state.allUsers,
  userById: (state) => (id) => state.users.find(attr => attr.id === id),
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
  totalElements: (state) => state.totalElements,
  elementsPerPage: (state) => state.elementsPerPage,
};

const mutations = {
  setUsers(state, { data, meta }) {
    state.users = data;
    state.currentPage = meta.current_page;
    state.totalPages = meta.last_page;
    state.totalElements = meta.total;
    state.elementsPerPage = meta.per_page; // Récupération dynamique
  },
  setAllUsers(state, { users }) {
    state.allUsers = users;
  },

  setCurrentPageBeforeUpdate(state, page) {
    state.currentPageBeforeUpdate = page;
  },


  addUser(state, user) {
    state.users.push(user);
  },
  updateUser(state, updatedUser) {
    const index = state.users.findIndex(attr => attr.id === updatedUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  },
  deleteUser(state, UserId) {
    state.users = state.users.filter(attr => attr.id !== UserId);
  }
};

const actions = {
  async fetchUsers({ commit }, { page = 1, search }) {
    try {
      const response = await usersService.fetchUsers(page, search);
      commit('setUsers', { data: response.data.data, meta: response.data.meta });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    }
  },

  async fetchAllUsers({ commit }) {
    try {
      const response = await usersService.fetchAllUsers();
      // console.log(response);
      commit('setAllUsers', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async createUser({ commit }, user) {
    try {
      const response = await usersService.createUser(user);
      commit('addUser', response.data);
      toast.success('Users created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      } else {
        console.log(error);
      }
    }
  },
  
  async updateUser({ commit, dispatch, state }, user) {
    try {
      const response = await usersService.updateUser(user);
      commit('updateUser', response.data);
      // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');

      // Mettre à jour la liste des attributs pour refléter les changements
      await dispatch('fetchUsers', { page: state.currentPage, search: '' });
      return response.data; // Retourne les données mises à jour
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }
    }
  }
  ,
  async deleteUser({ commit }, user) {
    try {
      await usersService.deleteUser(user);
      commit('deleteUser', user);
      toast.success('Users deleted successfully');
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
