import ShopsView from '@/views/dashboard/shops/ShopsView.vue';
import CreateShops from '@/components/dashbord/shops/CreateShops.vue';
import EditShops from '@/components/dashbord/shops/EditShops.vue';
import ListShop from '@/components/dashbord/shops/ListShop.vue';

export default [
  {
    path: '/dashboard/shops',
    component: ShopsView,
    children: [
      {
        path: '',
        name: 'ListShop',
        component: ListShop,
      },
      {
        path: 'edit/:id', 
        name: 'EditShops',
        component: EditShops,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateShops',
        component: CreateShops,
      },
    ],
  },
];
