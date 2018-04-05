var webpack = require('webpack');
var path = require('path');
//路径是相对于package.json所在路径
var entry_map = {
    'index': './src/index.js',
}
module.exports = {
    entry: entry_map,
    devtool: 'source-map',
    output: {
        path: path.resolve(process.cwd(),'dist/'),
        //[name]-[hash].js可以指定hash值。
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                loader: "babel-loader",
                query: {presets: ['es2015']}
            }

        ]
    }
}