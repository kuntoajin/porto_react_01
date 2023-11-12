const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    {
        entry: './pages/index.tsx',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'main.js'
        },
        target: 'web',
        devServer: {
            port: '3000',
            static: ['./public'],
            hot: true,
            liveReload: true,
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader'
                },
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