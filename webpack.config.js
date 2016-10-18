/**
 * /webpack.config.js
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Check if we are running production mode
 */
var isProduction = process.env.NODE_ENV == 'production';

/**
 * Create an array of plugins that
 * we'll use in our webpack config
 */
var plugins = [];

/**
 * Forward process.env.NODE_ENV into the bundle
 * to enable React.js production mode
 */
plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}))

/**
 * Do code de-duping and minification
 * when running production mode
 */
if (isProduction) {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',

  entry: [
    './src/entry.js'
  ],

  output: {
    path: './public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'], // ['babel-loader'] also works
        exclude: /node_modules/
      },
      {
        test: /\.jpg?g$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My React App', // set a custom title
    text: 'This is an ingress text added via webpack config and template', //set custom ingress text
    template: 'index.template.html', // use our custom template
    inject: 'body' // inject our bundled script into the body
  })]
};
