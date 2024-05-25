import AttributesView from '@/views/dashboard/Attributes/AttributesView.vue';
import AttributeCreate from '@/components/dashbord/attributes/AttributeCreate.vue';
import AttributeList from '@/components/dashbord/attributes/AttributeList.vue';
import AttributeEdit from '@/components/dashbord/attributes/AttributeEdit.vue';

export default [
  {
    path: '/dashboard/attributes',
    component: AttributesView,
    children: [
      {
        path: '',
        name: 'ListAttributes',
        component: AttributeList,
      },
      {
        path: 'edit/:id', 
        name: 'EditAttribute',
        component: AttributeEdit,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateAttribute',
        component: AttributeCreate,
      },
    ],
  },
];
