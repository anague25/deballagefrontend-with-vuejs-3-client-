<!-- src/components/Loader.vue -->
<template>
    <div class="loader" v-if="isLoading">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const isLoading = computed(() => store.getters['loader/isLoading']);
  
      return {
        isLoading,
      };
    },
  };
  </script>
  
  <style scoped>
  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    width: 360px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    width: 100px;
    height: 100px;
    border: 5px solid red;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  