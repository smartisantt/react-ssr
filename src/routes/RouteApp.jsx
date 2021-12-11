import React from 'react';
import { useRoutes } from 'react-router-dom';
import routeConfig from './routeConfig';

export default function RouteApp() {
  return <div>{useRoutes(routeConfig)}</div>;
}
