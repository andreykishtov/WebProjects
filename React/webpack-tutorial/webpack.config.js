const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css/,
            //     use: ['style-loader', 'css-loader']
            // }
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('globals.css'),
        new CopyWebPackPlugin([{ from: 'src/index.html' }])
    ],
    devServer: {
        contentBase: './',
        compress: true,
        port: 3000,
        stats: 'minimal',
        open: true
    }
};
