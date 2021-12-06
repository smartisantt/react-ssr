const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');

const clientConfig = {
  entry: './src/client',
  devtool:'source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './public'),
  },
};

module.exports = merge(baseConfig, clientConfig);
