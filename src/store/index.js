import { createStore } from 'vuex';
import attributes from './modules/attributes'; // Assurez-vous que le chemin est correct
import categories from './modules/categories'; // Assurez-vous que le chemin est correct
import cities from './modules/cities'; // Assurez-vous que le chemin est correct

const store = createStore({
  modules: {
    attributes, // Utilisez un nom clé pour le module
    categories, // Utilisez un nom clé pour le module
    cities, // Utilisez un nom clé pour le module
  
  }
});

export default store;
