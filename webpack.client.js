const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  entry: './src/client',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[hash:5].js',
    path: path.resolve(__dirname, './public'),
    assetModuleFilename: 'img/[name].[hash:5][ext]',
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|webp|svg|jpg|jpeg|bmp)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'] }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash:5].css',
    }),
  ],
};

module.exports = merge(baseConfig, clientConfig);
