import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App';
import getHTML from './getHTML';

export default (req, res) => {
  let url = req.originalUrl;

  const componentHTML = ReactDOM.renderToString(<App url={url} />);
  const html = getHTML(componentHTML);

  res.send(html);
};
