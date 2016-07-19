const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/application.js',
    output: {
        path: 'dist',
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
