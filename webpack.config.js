const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractStyle = new ExtractTextPlugin({
    filename: 'vendor.css', 
    allChunks: true
});
 
const compileHtml = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './examples/layout.html')
    , inject: 'content'
});

/*const vendors = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor', 
    filename: 'vendor.js',
});*/

 

module.exports = {

    devtool: "source-map"
    //devtool: "cheap-eval-source-map"
    //devtool: "nosources-source-map"
    

   , entry : {
        app     : path.resolve(__dirname, './examples/index.js')        
        //,vendor  : ['angular','angular-ui-tree',path.resolve(__dirname,'./src/material/index.js')]        
    }


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
                test: /\.(scss|css)$/,    
                use: extractStyle.extract({
                    fallback: "style-loader",                    
                    use: ['css-loader',  'sass-loader-once' ] 
                }) 
            }
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    }
                    ,
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015','es2017' ] 
                        }
                    }
                ]
                
            }
        ]
    }

    , plugins: [
        compileHtml        
        , extractStyle  
        , new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' 
        }) 
       /* , new webpack.optimize.CommonsChunkPlugin({
            name: 'uitree' 
        }) */
        
        //, vendors 
    ]

    , devServer: {
        contentBase: path.join(__dirname, "examples")
        , port: 9000
    }

    , output: {
        path: path.resolve(__dirname, 'dist')
		,filename: '[name].js'
	}

};