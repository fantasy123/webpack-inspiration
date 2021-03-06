const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map', // 构建速度快,生成完整的source map ,但有安全隐患, 适用于小中型项目
    entry: __dirname + '/app/main.js',  // 唯一入口文件
    output: {
        path: __dirname + '/build',    // 打包后文件存放的地方
        filename: 'bundle.js'   // 打包后输出的文件名
    },
    devServer: {
        contentBase: './public',  // 本地服务器所加载的页面所在的目录
        port: "8081",
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/ // 排除node_modules里的jsx和ES 6
            },
            {
                test: /\.css$/, // 匹配文件
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options: {
                            modules: true   // 开启模块化
                        }
                    },{
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()    // 内置热加载插件
    ]
}   // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录