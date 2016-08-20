const HtmlPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies, max-len

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: 'dist',
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlPlugin({
      template: 'src/client/index.html',
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
