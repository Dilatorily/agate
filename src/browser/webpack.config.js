const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: 'dist',
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/browser/index.html',
      inject: 'body',
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  bail: true,
  eslint: {
    failOnError: true,
  },
};
