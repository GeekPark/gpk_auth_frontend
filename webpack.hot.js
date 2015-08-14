const _ = require('lodash');
const path = require('path');
const config = require('./webpack.common');
const webpack = require('webpack');

_.assign(config.entry, {
  'webpack-dev-server': 'webpack-dev-server/client?http://localhost:8080',
  'only-dev-server': 'webpack/hot/only-dev-server'
});

config.output = {
  filename: '[name]-bundle.self.js',
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

// add style hot reload
config.resolve.root.push(path.join(__dirname, 'assets/stylesheets'));


module.exports = config;
