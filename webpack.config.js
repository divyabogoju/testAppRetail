const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const vendorList = [ 'react', 'react-dom', 'react-router' ];
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
* To add a new module,
* 1.    Add a new entry point with the name of the module as the key
*       e.g. entry: {
            addition: './src/main/webapp/addition/index.js',
        },
        addition                            -> name of the module.
        ./src/main/webapp/addition/index.js -> path to entry file.

* 2.    Add a new HtmlWebpackPlugin with the filename = the file that you want to import into your ftl.
*       chunks = will contain all the generated entry points you want to include in this module
*       e.g.  new HtmlWebpackPlugin ({
                filename: './addition/script-imports.ftl',
                template: './webpack-html-template.ftl',
                chunks: ['vendor', 'manifest', 'subtraction']
              })
* the generated file from the HtmlWebpackPlugin will contain the source tags of the generated sources.
* */

const projectWarVersion = process.env.projectWarVersion ? process.env.projectWarVersion : '1.0-SNAPSHOT';

console.log(`projectWarVersion: ${projectWarVersion}`);

const config = {
    mode: 'production',
    devtool: 'eval-source-map',
    entry: {
        'vendor': vendorList,
        'react-spring': './src/main/resources/static/ReactWebApp/ReactSpringApp.js'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, `target/classes/static`),
        filename: '__generatedSources/[name]/[chunkhash].[name].bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: [/node_modules/],
                test: /\.js$/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                use: 'url-loader',
                test: /\.(gif|jpg|png|svg|eot|otf|ttf|woff(2)?)(\?[^]*)?$/,
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '__generatedSources/[name]/[chunkhash].[name]-styles.css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CleanObsoleteChunks({}),
        new HtmlWebpackPlugin({
            filename: '../templates/script-imports.ftl',
            template: './webpack-html-template.ftl',
            chunks: ['vendor', 'manifest', 'react-spring']
        }),
    ]
};

module.exports = config;