module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/echartsDemo/' : '/',
    lintOnSave:false, // 是否在代码保存时进行eslint检测
    productionSourceMap: false, //是否在生产包时生成sourceMap文件，false将提高构建速度
    devServer: {
        port: 8082,
        hotOnly: false,// 取消热更新
    },
    // webpack配置，通过webpack-merge合并到最终配置中
    configureWebpack: {
        // 不需要打包的依赖库写入，在index.html通过cdn引入
        externals: {
            'jquery': '$',
            'echarts': 'echarts',
            'axios': 'axios'
        }
    }
}