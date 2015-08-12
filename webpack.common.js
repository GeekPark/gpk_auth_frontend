const path = require('path');
const node_modules_dir = path.join(__dirname, 'node_modules');
const reactPath = path.join(node_modules_dir, 'react');

var config = {
  context: __dirname,
  entry: ['./assets/javascripts/App'],
  resolve: {
    root: [path.join(__dirname, 'scripts'),
           path.join(__dirname, 'assets/javascripts'),],
    extensions: ['','.webpack.js', '.web.js', '.js', '.jsx', '.styl', '.css'],
    alias: {}
  },
  module: {
    noParse: [],
    loaders: []
  },
};

module.exports = config;
