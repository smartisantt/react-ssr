import express from 'express';
import render from './render';
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://open.duyiedu.com/', changeOrigin: true }));

app.use(express.static('./public'));

app.get('*', render);

app.listen(8000, () => {
  console.log('服务启动！');
});
