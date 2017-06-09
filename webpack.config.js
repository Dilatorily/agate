const HtmlPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies, max-len

module.exports = [
  {
    entry: './src/client/index.jsx',
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
        { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
      ],
      loaders: [
        { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.css$/, loaders: ['style', 'css'] },
      ],
    },
    bail: true,
    eslint: {
      failOnError: true,
    },
  },
  {
    entry: {
      index: './src/electron/index.js',
    },
    output: {
      path: 'dist',
      filename: '[name].js',
    },
    module: {
      preLoaders: [
        { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
      ],
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json' },
      ],
    },
    bail: true,
    eslint: {
      failOnError: true,
    },
    node: {
      __dirname: true,
    },
    target: 'electron',
  },
];
