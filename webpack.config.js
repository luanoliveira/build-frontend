const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'fonts/'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    watch: true,
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
        }
    }
};