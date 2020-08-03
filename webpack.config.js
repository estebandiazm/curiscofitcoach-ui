const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888,
        publicPath:'/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/,

                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        encoding: 'base64'
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|gif|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ]
};