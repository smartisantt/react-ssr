
import express from 'express';
import render from './render'

const app = express();

app.use(express.static('./public'));

app.get('*', render);

app.listen(8000, () => {
  console.log('服务启动！');
});
