import PropertiesView from '@/views/dashboard/Properties/PropertiesView.vue';
import CreateProperties from '@/components/dashbord/properties/CreateProperties.vue';
import EditProperties from '@/components/dashbord/properties/EditProperties.vue';
import ListProperties from '@/components/dashbord/properties/ListProperties.vue';

export default [
  {
    path: '/dashboard/properties',
    component: PropertiesView,
    children: [
      {
        path: '',
        name: 'ListProperties',
        component: ListProperties,
      },
      {
        path: 'edit/:id', 
        name: 'EditProperties',
        component: EditProperties,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateProperties',
        component: CreateProperties,
      },
    ],
  },
];
