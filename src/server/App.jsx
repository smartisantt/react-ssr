import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import RouteApp from '../routes/RouteApp';
import { Provider } from 'react-redux';
import store from '../store';

export default (props) => {
  const { url } = props;
  return (
    <Provider store={store}>
      <StaticRouter location={url}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
};
