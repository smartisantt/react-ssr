import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App';

export default  (req, res) => {
  const componentHTML = ReactDOM.renderToString(<App />);
  console.log(componentHTML);
  const html = `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>react ssr</title>
  </head>
  <body>
      <div id="root">${componentHTML}</div>
  </body>
  <script src="./js/bundle.js"></script>
  </html>
      `;
  res.send(html);
};
