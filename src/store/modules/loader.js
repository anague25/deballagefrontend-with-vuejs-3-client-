// src/store/modules/loading.js
const state = {
    isLoading: false,
  };
  
  const mutations = {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  };
  
  const actions = {
    setLoading({ commit }, isLoading) {
      commit('SET_LOADING', isLoading);
    },
  };
  
  const getters = {
    isLoading: (state) => state.isLoading,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  