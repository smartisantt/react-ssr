import React from 'react';
import Header from '../components/Header';
// import renderRoutes from '@/routes/renderRoutes';
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom';

export default function Front(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <div>front</div>
      <div style={{ paddingTop: 50 }}> {Outlet}</div>
    </div>
  );
}
