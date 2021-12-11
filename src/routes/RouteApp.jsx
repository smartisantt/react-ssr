import React from 'react';
import { useRoutes } from 'react-router-dom';
import routeConfig from './routeConfig';

export default function RouteApp() {
  let element = useRoutes(routeConfig)
  return <div>{element}</div>;
}
