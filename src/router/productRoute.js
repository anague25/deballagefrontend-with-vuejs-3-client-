import ProductsView from '@/views/dashboard/Products/ProductsView.vue';
import CreateProducts from '@/components/dashbord/products/CreateProducts.vue';
import EditProducts from '@/components/dashbord/products/EditProducts.vue';
import ListProducts from '@/components/dashbord/products/ListProducts.vue';

export default [
  {
    path: '/dashboard/products',
    component: ProductsView,
    children: [
      {
        path: '',
        name: 'ListProducts',
        component: ListProducts,
      },
      {
        path: 'edit/:id', 
        name: 'EditProducts',
        component: EditProducts,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateProducts',
        component: CreateProducts,
      },
    ],
  },
];
