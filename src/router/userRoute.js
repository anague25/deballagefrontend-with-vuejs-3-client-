import UsersView from '@/views/dashboard/users/UsersView.vue';
import CreateUsers from '@/components/dashbord/users/CreateUsers.vue';
import EditUsers from '@/components/dashbord/users/EditUsers.vue';
import ListUsers from '@/components/dashbord/users/ListUsers.vue';

export default [
  {
    path: '/dashboard/users',
    component: UsersView,
    children: [
      {
        path: '',
        name: 'ListUsers',
        component: ListUsers,
      },
      {
        path: 'edit/:id', 
        name: 'EditUsers',
        component: EditUsers,
        props: true,
      },
      {
        path: 'create',
        name: 'CreateUsers',
        component: CreateUsers,
      },
    ],
  },
];
