const path = require('path')
function resolvePath (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {babelPolyfill:"babel-polyfill"},
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                include: [resolvePath('src'), resolvePath('/node_modules/antd')]
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
    plugins: []
}

