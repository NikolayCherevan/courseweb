const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
var ImageminPlugin = require('imagemin-webpack-plugin').default
const glob =  require('glob');
const PATHS = {
    src: path.join(__dirname, 'src')
}
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    plugins: [new MiniCssExtractPlugin(),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            algorithm: "gzip"
          }),
          new ImageminPlugin({
            externalImages: {
              context: 'src', // Important! This tells the plugin where to "base" the paths at
              sources: glob.sync('img/**/*.jpg'),
              destination: 'src/public/images',
              fileName: '[path][name].[ext]' // (filePath) => filePath.replace('jpg', 'webp') is also possible
            }
          }),
          new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ],
    module: {
        rules: [
         
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif|webp)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // On development we want to see where the file is coming from, hence we preserve the [path]
                        name: '[path][name].[ext]?hash=[hash:20]',
                        limit: 8192
                    }
                },]
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
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    stats: {
        children: true,
    }
}