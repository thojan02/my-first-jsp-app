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
  plugins: [new HtmlWebpackPlugin({
    title: 'My First React App', // set a custom title
    template: 'index.template.html', // use our custom template
    inject: 'body' // inject our bundled script into the body
  })]
};
