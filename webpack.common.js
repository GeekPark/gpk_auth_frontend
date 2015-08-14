const path = require('path');
const node_modules_dir = path.join(__dirname, 'node_modules');
const reactPath = path.join(node_modules_dir, 'react');

var config = {
  context: __dirname,
  entry: {
    app: './app/App'
  },
  resolve: {
    root: [ path.join(__dirname, 'app/')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.styl', '.css'],
    alias: {}
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    noParse: [],
    loaders: []
  }
};

module.exports = config;
