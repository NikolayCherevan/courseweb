const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

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
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        // }),
    ],
    module: {
        rules: [
            {
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
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         styles: {
        //             name: 'styles',
        //             test: /\.css$/,
        //             chunks: 'all',
        //             enforce: true
        //         }
        //     }
        // }
    },
    stats: {
        children: true,
    }
}