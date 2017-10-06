const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
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
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    watch: true,
    resolve: {
        extensions: ['.js'],
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    }
};