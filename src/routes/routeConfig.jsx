import React from 'react';
import Front from '@/pages/Front';
import Home from '@/pages/Home';
import News from '@/pages/News';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

import Admin from '@/pages/Admin';
import AdminHome from '@/pages/Admin/Home';
import SystemManage from '@/pages/Admin/SystemManage';
import UserManage from '@/pages/Admin/UserManage';
import AdminNotFound from '@/pages/Admin/NotFound';

export default [
  {
    path: '/',
    element: <Front />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: '/admin/system',
        element: <SystemManage />,
      },
      {
        path: '/admin/user',
        element: <UserManage />,
      },
      {
        path: '*',
        element: <AdminNotFound />,
      },
    ],
  },
];
