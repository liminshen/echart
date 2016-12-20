var webpack = require('webpack');
var path = require('path');
//plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {};
var publicPath = 'http://test.yinyuetai.com:8080/';

config.entry = { 
	index:'./src/index.js',
	common : []
};
config.output = {
	path: path.join(__dirname, './build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
};
config.module = {
	loaders : [

	]
};
config.plugins = [
	new ExtractTextPlugin('[name].[hash].css', {
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
	new HtmlWebpackPlugin({
        title: 'My first vue app',
        template: './index.html',
        filename: 'index.html',
        chunks: ['index', 'common'],
        hash: true,
        inject: true
    }),
    new OpenBrowserPlugin({
        url: publicPath
    })
]
module.exports = config;