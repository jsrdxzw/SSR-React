const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app:path.resolve(__dirname,'../src/app.js')
    },
    output: {
        filename: "[name].[hash].js",
        path:path.resolve(__dirname,'../dist'),
        publicPath: "/public"
    },
    module: {
        rules: [
            {
                test:/.js(x)?$/,
                exclude:/node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}