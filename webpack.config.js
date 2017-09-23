const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    'babel-polyfill',
    './root.js'
  ],

  output: {
    path: '/dist',
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  devtool: 'eval-source-map',

  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true
    })
  ]
};
