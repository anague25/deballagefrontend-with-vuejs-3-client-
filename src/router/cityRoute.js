import CitiesView from '@/views/dashboard/Cities/CitiesView.vue';
import CreateCities from '@/components/dashbord/cities/CreateCities.vue';
import EditCities from '@/components/dashbord/cities/EditCities.vue';
import ListCities from '@/components/dashbord/cities/ListCities.vue';

export default [
  {
    path: '/dashboard/cities',
    component: CitiesView,
    children: [
      {
        path: '',
        name: 'ListCities',
        component: ListCities,
      },
      {
        path: 'edit/:id', 
        name: 'EditCities',
        component: EditCities,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateCities',
        component: CreateCities,
      },
    ],
  },
];
