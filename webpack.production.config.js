const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",  // 唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",   // style-loader将所有的计算后的样式加入页面中
                    use: [{
                        loader: "css-loader",   // 使你能够使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            modules: true
                        }
                    },{
                        loader: "postcss-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),   // 分配模块触发顺序的插件
        new webpack.optimize.UglifyJsPlugin(),  // 压缩JS代码插件
        new ExtractTextPlugin("style.css")
    ]
}