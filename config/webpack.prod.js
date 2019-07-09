const webpack = require('webpack');
const merge = require('webpack-merge');

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMonitor = require('webpack-monitor');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',

    devtool: 'source-map',

    stats: {
        colors: false,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true,
    },
    
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            })
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor_app',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            
            {
                test: /\.scss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "React",
            template: './public/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
        }),
        new WebpackMonitor({
            capture: true, // -> default 'true'
            target: '../monitor/myStatsStore.json', // default -> '../monitor/stats.json'
            launch: true, // -> default 'false'
            port: 8080, // default -> 8081
            excludeSourceMaps: true // default 'true'
        }),
    ],
});