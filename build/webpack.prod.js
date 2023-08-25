// webpack.prod.js
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const globAll = require('glob-all')

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        clean: true,
    },

    plugins: [
        // 复制文件插件
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'), // 复制public下文件
                    to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
                    filter: source => {
                        return !source.includes('index.html') // 忽略index.html
                    }
                },
            ],
        }),
        // 抽离css插件
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css'
        }),
        // 去除没用到的css插件
        new PurgeCSSPlugin({
            paths: globAll.sync([
                `${path.join(__dirname, '../src')}/**/*.tsx`,
                `${path.join(__dirname, '../public')}/index.html`
            ]),
        }),
       
    ],
    // 优化配置
    optimization: {
        minimizer: [
            // 压缩css
            new CssMinimizerPlugin(),
            // 压缩js
            new TerserPlugin({
                parallel: true, // 开启多线程压缩
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ["console.log"]
                    }
                }
            }),
        ],
        splitChunks: { // 分隔代码
            chunks: 'all', // 三个枚举值： async 异步加载导入的模块 import('module').then() ; initial 直接import导入的模块 ; all 包含上述两种情况
            minSize: 20000, // 生成chunk最小的大小
            enforceSizeThreshold: 50000, // 当chunk的大小超过此值将强制拆分
            cacheGroups: {
                common: {
                    name: "common", // 指定包名，不指定时使用上层key作为包名
                    chunks: "all",
                    minSize: 10,
                    priority: 0
                },
                vendors: { // 提取node_modules代码
                    test: /node_modules/, // 只匹配node_modules里面的模块
                    name: 'vendors', // 提取文件命名为vendors,js后缀和chunkhash会自动加
                    minChunks: 1, // 只要使用一次就提取出来
                    chunks: 'initial', // 只提取初始化就能获取到的模块，不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                    priority: 10, // 提取优先级为1
                },
            }
        }
    },
})