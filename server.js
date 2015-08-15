var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  stats: { colors: true }
});

console.log('webpack-dev-server was running in localhost:8080');

server.listen(8080, 'localhost', function() {});
