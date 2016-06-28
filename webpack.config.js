/**
 * /webpack.config.js
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/entry.js'
  ],

  output: {
    path: './public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
