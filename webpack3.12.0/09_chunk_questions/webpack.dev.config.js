var path = require('path'); //基于nodeJs 
const webpack = require('webpack'); //访问内置的插件
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
 
module.exports = {
	mode: 'production',
	entry:{
		'main1': './src/main1.js',
		'main2': './src/main2.js'
	},
	output: {
		path: path.resolve('./dist'), //相对路径转绝对路径
			filename: '[name].js',
	},
	module: {
		// rules: [{
		// 		test: /\.css$/,
		// 		use: ['style-loader', 'css-loader', 'postcss-loader'] //顺序不能变
		// 	}, 
		// 	{
		// 		test: /\.vue$/,
		// 		loader: 'vue-loader'
		// 	}
		// ]
	},
	plugins: [
		// new webpack.ProgressPlugin(),
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html'
		// }),
		// new VueLoaderPlugin() 
	],
	watch: true
}
