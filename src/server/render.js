import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App';
import getScripts from './getScripts'
import getLinks from './getLinks'

export default  (req, res) => {
  const componentHTML = ReactDOM.renderToString(<App />);

  const html = `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>react ssr</title>
      ${getLinks()}
  </head>
  <body>
      <div id="root">${componentHTML}</div>
  </body>
  ${getScripts()}
  </html>
      `;
      
  res.send(html);
};
