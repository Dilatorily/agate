module.exports = {
  entry: {
    index: './src/application/index.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js',
  },
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
  node: {
    __dirname: false,
  },
  target: 'electron',
};
