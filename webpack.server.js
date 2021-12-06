const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  entry: './src/server',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './dist'),
  },
  target: 'node',
  // externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);