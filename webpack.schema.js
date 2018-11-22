const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: {
        schema: path.join(__dirname, '/source/Schema/schema.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true,
        globalObject: `typeof self !== 'undefined' ? self : this`,
    },
    module: {
        rules: [{
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
        }],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            Schema: path.resolve(__dirname, 'source/Schema/'),
        },
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({ cache: true, parallel: true })]
    },
};
