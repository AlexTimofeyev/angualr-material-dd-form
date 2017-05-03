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

const vendors =new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor', 
    filename: 'vendor.js',
});

 

module.exports = {

    //devtool: "source-map"
    //devtool: "cheap-eval-source-map"
    devtool: "nosources-source-map"
    

   , entry : {
        app   : path.resolve(__dirname, './examples/index.js'),
        //vendor: ['angular','angular-ui-tree','angular-material','angular-animate']
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
                            presets: ['es2015'] 
                        }
                    }
                ]
                
            }
        ]
    }

    , plugins: [
        compileHtml        
        , extractStyle      
        , vendors
    ]

    , devServer: {
        contentBase: path.join(__dirname, "examples")
        , port: 9000
    }

    ,output: {
        path: path.resolve(__dirname, 'dist')
		,filename: 'bundle.js'
	}

    /*, resolve: {        
         alias: { 
             //'material': path.join( __dirname, 'src/style/angular-material.min.scss') 
            //, style: './style/'  
        } 
    }*/

};