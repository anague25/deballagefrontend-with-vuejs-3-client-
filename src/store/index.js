import { createStore } from 'vuex';
import attributes from './modules/attributes'; // Assurez-vous que le chemin est correct
import categories from './modules/categories'; // Assurez-vous que le chemin est correct
import cities from './modules/cities'; // Assurez-vous que le chemin est correct
import neighborhoods from './modules/neighborhoods'; // Assurez-vous que le chemin est correct
import properties from './modules/properties'; // Assurez-vous que le chemin est correct
import products from './modules/products'; // Assurez-vous que le chemin est correct
import ProductsImages from './modules/ProductsImages'; // Assurez-vous que le chemin est correct
import shops from './modules/shops'; // Assurez-vous que le chemin est correct
import getImagePaths from './modules/getImagePaths'; // Assurez-vous que le chemin est correct

const store = createStore({
  modules: {
    attributes, // Utilisez un nom clé pour le module
    categories, // Utilisez un nom clé pour le module
    cities, // Utilisez un nom clé pour le module
    neighborhoods, // Utilisez un nom clé pour le module
    properties, // Utilisez un nom clé pour le module
    products, // Utilisez un nom clé pour le module
    ProductsImages, // Utilisez un nom clé pour le module
    shops, // Utilisez un nom clé pour le module
    getImagePaths, // Utilisez un nom clé pour le module
  
  }
});

export default store;
