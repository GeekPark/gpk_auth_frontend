// Run like this:
// cd client && $(npm bin)/webpack -w --config webpack.rails.config.js
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

// NOTE: All style sheets handled by the asset pipeline in rails

const config = require('./webpack.common');

config.output = {
  filename: 'client-bundle.js',
  path: '../app/assets/javascripts/generated'
};

// load jQuery from cdn or rails asset pipeline
config.externals = {jquery: 'var jQuery'};

// See webpack.common.config for adding modules common to both the webpack dev server and rails

config.module.loaders.push(
  {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
);
module.exports = config;
