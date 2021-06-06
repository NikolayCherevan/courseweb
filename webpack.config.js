const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // On development we want to see where the file is coming from, hence we preserve the [path]
                        name: '[path][name].[ext]?hash=[hash:20]',
                        limit: 8192
                    }
                }]
            },
            {
                // Load all icons
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: [{
                    loader: "url-loader?limit=1000000&mimetype=image/svg+xml",
                    options: {
                        publicPath: 'dist/img',
                    },
                }, ]
            }
        ]
    },
    stats: {
        children: true,
    }
}