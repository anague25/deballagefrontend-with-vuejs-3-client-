import CategoriesView from '@/views/dashboard/Categories/CategoriesView.vue';
import CreateCategories from '@/components/dashbord/categories/CreateCategories.vue';
import EditCategories from '@/components/dashbord/categories/EditCategories.vue';
import ListCategories from '@/components/dashbord/categories/ListCategories.vue';

export default [
  {
    path: '/dashboard/categories',
    component: CategoriesView,
    children: [
      {
        path: '',
        name: 'ListCategories',
        component: ListCategories,
      },
      {
        path: 'edit/:id', 
        name: 'EditCategories',
        component: EditCategories,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateCategories',
        component: CreateCategories,
      },
    ],
  },
];
