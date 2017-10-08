const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        site: './src/site.js',
        admin: './src/admin.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
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
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/'
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
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js'
        })
    ],
    watch: true,
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            'vue': 'vue/dist/vue.js',
            'bootstrap-sass': 'bootstrap/scss/bootstrap.scss',
            'font-awesome': 'font-awesome/scss/font-awesome.scss',
        }
    }
};