const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// 合并公共配置，并添加开发环境配置
module.exports = merge(common, {
    mode: 'development', // 开发模式
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[fullhash].js',
        chunkFilename: 'js/[name].[fullhash].js',
        clean: true,
    },

    devServer: {
        port: 3000, // 服务端口号
        compress: false, // gzip压缩，开发环境不开启，提升速度
        historyApiFallback: true, // 解决路由跳转404问题
        hot: true,
        //托管静态资源文件
        static: {
            directory: path.join(__dirname, "../public"),
        },
        client: {
            progress: true, // 将运行进度输出到控制台。
            overlay: { warnings: false, errors: true }, // 全屏显示错误信息
        },
    },

    // 缓存
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename],
        },
        cacheDirectory: path.resolve(__dirname, '../cache'),
        name: 'scf-cache',
        compression: 'gzip',
    },

    plugins: [
        // 开启react模块热替换插件
        new ReactRefreshWebpackPlugin(),
    ]
})