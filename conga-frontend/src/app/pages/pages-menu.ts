import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'Customer create',
    icon: 'nb-compose',
    link: '/pages/customers/create-customer',
  },

  {
    title: 'Details',
    icon: 'nb-compose',
    link: '/pages/customers/customers-details',
  },

  {
    title: 'List',
    icon: 'nb-compose',
    link: '/pages/customers/customers-list',
  },


  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
