module.exports = {
    devtool: 'eval-source-map', // 构建速度快,生成完整的source map ,但有安全隐患, 适用于小中型项目
    entry: __dirname + '/app/main.js',  // 唯一入口文件
    output: {
        path: __dirname + '/public',    // 打包后文件存放的地方
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
                    loader: 'babel-loader', // 把ES6 ES 7转成ES5 将基于JS拓展的语言如React JSX转成浏览器能识别的JS版本
                    options: {
                        presets: [
                            "es2015", "react"   // 可以处理ES 6和jsx
                        ]
                    }
                },
                exclude: /node_modules/ // 排除node_modules里的jsx和ES 6
            }
        ]
    }
}   // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录