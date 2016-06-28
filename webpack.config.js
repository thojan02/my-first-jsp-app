/**
 * /webpack.config.js
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    './src/entry.js'
  ],

  output: {
    path: './public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'], // ['babel-loader'] also works
      exclude: /node_modules/,
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My React App', // set a custom title
    text: 'This is some random text I added for fun....', //set custom ingress text
    template: 'index.template.html', // use our custom template
    inject: 'body' // inject our bundled script into the body
  })]
};
