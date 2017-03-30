// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname + '/src/index.html',
//     filename: 'index.html',
//     inject: 'body'
// });
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/static',
        publicPath: __dirname + '/static',
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        //     {
        //     test: /\.scss$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "sass-loader" // compiles Sass to CSS
        //     }]
        // }
        ],
        
    },
    // plugins: [HTMLWebpackPluginConfig]
};