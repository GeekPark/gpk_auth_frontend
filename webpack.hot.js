const _ = require('lodash');
const path = require('path');
const config = require('./webpack.common');
const webpack = require('webpack');

config.entry.push(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);

config.output = {
  filename: 'app-bundle.self.js',
  path: __dirname,
  publicPath: 'http://localhost:8080/assets'
};


config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.devtool = 'eval-source-map';

config.module.loaders.push(
  {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
  {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
);

module.exports = config;
