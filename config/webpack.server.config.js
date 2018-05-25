const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//针对服务器渲染的生产环境的配置

module.exports = {
    mode: "production",
    target: "node",
    entry: {
        app: path.resolve(__dirname, '../src/server.js')
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "server-entry.js",
        libraryTarget: "commonjs2"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath:'images'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath:'fonts'
                        }
                    }
                ]
            }
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 mozjpeg: {
            //                     progressive: true,
            //                     quality: 65
            //                 },
            //                 // optipng.enabled: false will disable optipng
            //                 optipng: {
            //                     enabled: false,
            //                 },
            //                 pngquant: {
            //                     quality: '65-90',
            //                     speed: 4
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //                 // the webp option will enable WEBP
            //                 webp: {
            //                     quality: 75
            //                 }
            //             }
            //         },
            //     ],
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new OptimizeCssAssetsPlugin(),
    ]
}