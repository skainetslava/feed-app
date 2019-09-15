const webpack = require("webpack");
const merge = require("webpack-merge");

const path = require("path");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",

  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  },

  optimization: {
    runtimeChunk: true,
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
        parallel: true,
        terserOptions: {
          toplevel: true,
          compress: {
            inline: false,
            drop_console: true
          },
          output: {
            comments: false
          }
        }
      }),
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor_app",
          chunks: "all",
          minChunks: 2
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true,
              //modules: true,
             localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "..")
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      title: "Spootifly Web",
      template: "./public/index.html",
      favicon: 'src/favicon.ico',
      filename: "index.html",
    })
  ]
});
