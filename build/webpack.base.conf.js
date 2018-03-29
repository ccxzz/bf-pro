const path = require('path')
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {babelPolyfill:"babel-polyfill"},
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
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

