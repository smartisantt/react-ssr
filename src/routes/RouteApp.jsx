import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routeConfig from './routeConfig';
import Header from '../components/Header';

export default function RouteApp() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <Routes>
          {routeConfig.map((props) => (
            <Route {...props} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
