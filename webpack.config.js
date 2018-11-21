const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        'index': path.join(__dirname, '/source/index.js'),
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: false
                        }
                    }
                ],
            }, {
            test: /\.sss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]-[hash:base64:5]',
                        }
                    },
                    'postcss-loader'
                ]
            }
        ],
    },
    externals : {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            Schema: path.resolve(__dirname, 'source/Schema/'),
            tinycolor: path.resolve(__dirname, 'tinycolor/'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ cache: true, parallel: true }),
            new OptimizeCSSAssetsPlugin({}),
        ]
    },
};
