import React from 'react';
import Front from '@/pages/Front';
import Home from '@/pages/Home';
import News from '@/pages/News';
import About from '@/pages/About';


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
    ],
  },
];

 
