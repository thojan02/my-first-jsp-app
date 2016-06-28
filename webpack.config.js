/**
 * /webpack.config.js
 */

var webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry.js'
  ],

  output: {
    path: './public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
};
