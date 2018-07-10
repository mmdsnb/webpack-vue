const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: __dirname + "/src/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [
            // {
            // 	test:/.js$/,
            // 	loader:"babel-loader",
            // 	exclude: "/node_modules"
            // },
            {
                test: /.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                loader: ['vue-style-loader', 'css-loader', 'sass-loader']
            },

        ]
    },
    plugins: [
        // new WebpackDevServerOutput({
        // 	path: '/dist',
        // 	isDel: true
        // }),
        new VueLoaderPlugin()
    ],
    resolve: {alias: {'vue': 'vue/dist/vue.js'}}

}