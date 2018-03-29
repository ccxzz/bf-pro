'use strict'
const path = require('path')

module.exports = {
    dev: {
        NODE_ENV: '"development"',
        assetsOutPath:  path.resolve(__dirname, '../dist'),
        cssPath: 'css/[name].css',
        assetsPublicPath: '/',
        devtool: 'eval-source-map',
        cssSourceMap: false,
    },
    build: {
        NODE_ENV: '"production"',
        cssPath: 'css/[name].[contenthash].css',
        assetsOutPath:  path.resolve(__dirname, '../dist'),
        entryPath:  path.resolve(__dirname, '../src/page/**/**.js'),
        assetsPublicPath: '../',
        productionSourceMap: true,
        devtool: '#source-map',
    }
}
