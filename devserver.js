const config = require("./webpack.config.js");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);
const devServerOptions = Object.assign({}, {
    publicPath: "/",
    inline: true,
    hot: true,
    compress: true,
    open: true,
    openPage: 'html/main.html',
    stats: {
        colors: true
    }
});
const server = new WebpackDevServer(compiler, devServerOptions);
server.listen(8080);