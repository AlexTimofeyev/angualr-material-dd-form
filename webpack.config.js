const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin("[name].css");

const compileHtml = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './examples/layout.html')
    , inject: 'content'
});

/*
new ExtractTextPlugin('[name].css', {allChunks: true})
*/

/*var pathToAngular = path.resolve(__dirname, '.node_modules/angular/angular.min.js');*/

module.exports = {

    devtool: "source-map"

    , entry: path.resolve(__dirname, './examples/index.js')

    , module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }],
            }
            ,
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })

            }
            ,
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                    , options: { root: '.' }
                }, {
                    loader: "css-loader"
                    , options: { root: '.' }
                }]
            }
        ]
    }

    , plugins: [
        compileHtml
        ,extractSass
    ]

    , devServer: {
        contentBase: path.join(__dirname, "examples"),
        port: 9000
    }

};