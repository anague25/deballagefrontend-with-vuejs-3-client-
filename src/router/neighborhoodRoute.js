import CitiesView from '@/views/dashboard/Neighborhoods/NeighborhoodsView.vue';
import CreateNeighborhoods from '@/components/dashbord/neighborhoods/CreateNeighborhoods.vue';
import EditNeighborhoods from '@/components/dashbord/neighborhoods/EditNeighborhoods.vue';
import ListNeighborhoods from '@/components/dashbord/neighborhoods/ListNeighborhoods.vue';

export default [
  {
    path: '/dashboard/neighborhoods',
    component: CitiesView,
    children: [
      {
        path: '',
        name: 'ListNeighborhoods',
        component: ListNeighborhoods,
      },
      {
        path: 'edit/:id', 
        name: 'EditNeighborhoods',
        component: EditNeighborhoods,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateNeighborhoods',
        component: CreateNeighborhoods,
      },
    ],
  },
];
