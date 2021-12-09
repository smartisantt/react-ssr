import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import RouteApp from '../routes/RouteApp';

export default (props) => {
  const {url} = props
  return (
    <StaticRouter location={url}>
      <RouteApp />
    </StaticRouter>
  );
};
