// src/store/modules/auth.js
import authsService from '@/services/auths/authsService';
import axios from 'axios'; // Assurez-vous d'importer axios

const state = {
  adminToken: localStorage.getItem('admin_token') || '',
  user: {}
};

const mutations = {
  SET_ADMIN_TOKEN(state, token) {
    state.adminToken = token;
  },
  REMOVE_ADMIN_TOKEN(state) {
    state.adminToken = '';
  },
  REMOVE_AUTH_USER(state) {
    state.user = {};
  },
  SET_USER(state, user) {
    state.user = user;
  },
  LOGOUT(state) {
    state.adminToken = '';
    state.user = {};
  }
};

const actions = {

  async register({ commit }, userData) {
    try {
      const response = await authsService.register(userData);
      console.log(response);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        throw error.response.data.errors;
      }
    }
  },


  async login({ commit }, credentials) {
    try {
      const response = await authsService.login(credentials);
      const token = response.data.access_token;
      localStorage.setItem('admin_token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      commit('SET_ADMIN_TOKEN', token);
      return response;
    } catch (error) {
      throw error;

    }
  },

  async fetchUser({ commit }) {
    const response = await authsService.fetchUser();
    commit('SET_USER', response.data);
  },


  async logout({ commit }) {
    try {
      await authsService.logout(); // Optionnel, si votre API supporte la déconnexion
      localStorage.removeItem('admin_token');
      commit('REMOVE_ADMIN_TOKEN'); // Mutation pour supprimer le jeton du store
      commit('REMOVE_AUTH_USER'); // Mutation pour supprimer le jeton du store
    } catch (error) {
      localStorage.removeItem('admin_token');
      console.error('Error logging out:', error);
    }
  },



};

const getters = {
  isAuthenticated: state => !!state.adminToken,
  user: state => state.user
};

export default {
  namespaced: true, // Assurez-vous que namespaced est défini à true
  state,
  mutations,
  actions,
  getters
};
