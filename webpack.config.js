const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    {
        mode: 'development',
        entry: './pages/index.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'main.js'
        },
        target: 'web',
        devServer: {
            port: '3000',
            static: ['./public'],
            hot: true,
            liveReload: true
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|ttf)$/i,
                    type: 'assets/resource'
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

    }
]