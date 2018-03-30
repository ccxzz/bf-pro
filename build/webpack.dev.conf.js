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

const devWebpackConfig = merge(baseWebpackConfig, {
    entry: {},
    devtool: config.dev.devtool,
    output: {
        path: config.dev.assetsOutPath,
        filename: 'js/[name].js',
        publicPath: config.dev.assetsPublicPath
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
                NODE_ENV: config.dev.NODE_ENV
            }
        }),
        new CleanWebpackPlugin(config.dev.assetsOutPath, {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new ExtractTextPlugin('css/[name].css')
    ]
})

const entries = Entry.getEntries(config.dev.entryPath);

module.exports = new Promise((resolve, reject) => {
    Object.keys(entries).forEach(function(name) {
        devWebpackConfig.entry[name] =  ['webpack-dev-server/client?http://localhost:8080/',entries[name]];

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
        devWebpackConfig.plugins.push(plugin);
    })
    resolve(devWebpackConfig)
})