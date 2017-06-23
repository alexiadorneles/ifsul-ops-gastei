const webpack = require('webpack');
const {join} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isDev = ENV === 'dev';

console.log("Development:", isDev);

module.exports = {
    entry: {
        bundle: "./app.module.js"
    },
    output: {
        path: join(__dirname, 'bundles/'),
        filename: 'js/app-bundle.min.js',
    },
    devServer: {
        contentBase: ["bundles/", "."],
        port: 9000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/css/app-bundle.css',
            allChunks: true,
            disable: isDev
        }),
    ]
}