const webpack = require('webpack')
const path = require('path')
const config = require('../config')
const merge = require('webpack-merge')
const Entry = require('../webpack-pkg/entry')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolvePath (dir) {
    return path.join(__dirname, '..', dir)
}

const prodWebpackConfig = merge(baseWebpackConfig, {
    entry: {},
    devtool: config.build.devtool,
    output: {
        path: config.build.assetsOutPath,
        filename: 'js/[name].[hash].js',
        publicPath: config.build.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.build.NODE_ENV
            }
        }),
        new CleanWebpackPlugin(config.build.assetsOutPath, {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new ExtractTextPlugin('css/[name].[contenthash].css'),
        new webpack.optimize.UglifyJsPlugin()
    ]
})

const entries = Entry.getEntries(config.build.entryPath);

module.exports = new Promise((resolve, reject) => {
    Object.keys(entries).forEach(function(name) {
        prodWebpackConfig.entry[name] = entries[name];

        let plugin = new HtmlWebpackPlugin({
            filename: 'html/'+name+'.html',
            template: resolvePath('src/page/'+name+'/'+name+'.html'),    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:false,    //为静态资源生成hash值
            chunks: ['common', name],
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        });
        prodWebpackConfig.plugins.push(plugin);
    })
    resolve(prodWebpackConfig)
})