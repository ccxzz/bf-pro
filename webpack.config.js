const path = require('path')
const webpack = require('webpack')
const Entry = require('./webpack-pkg/entry')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entries = Entry.getEntries('./src/page/**/**.js');

module.exports = {
    entry: {babelPolyfill:"babel-polyfill"},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'image/[hash:8].[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({name:'common'}),
    ]
}

Object.keys(entries).forEach(function(name) {
    module.exports.entry[name] = ['webpack-dev-server/client?http://localhost:8080/',entries[name]];

    let plugin = new HtmlWebpackPlugin({
        filename: 'html/'+name+'.html',
        template:'./src/page/'+name+'/'+name+'.html',    //html模板路径
        inject:true,    //允许插件修改哪些内容，包括head与body
        hash:false,    //为静态资源生成hash值
        chunks: ['common', name],
        minify:{    //压缩HTML文件
            removeComments:true,    //移除HTML中的注释
            collapseWhitespace:false    //删除空白符与换行符
        }
    });
    module.exports.plugins.push(plugin);
});
