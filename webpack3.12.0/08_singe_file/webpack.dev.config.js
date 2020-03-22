var path = require('path'); //基于nodeJs 
const webpack = require('webpack'); //访问内置的插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
	mode: 'production',
	entry: './src/main.js',
	output: {
		filename: './build.js',
		path: path.resolve('./dist') //相对路径转绝对路径
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'] //顺序不能变
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'] //顺序不能变
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'] //顺序不能变
			},
			{
				// 处理图片
				test: /\.(png|jpg|gif|svg)$/,
				// 写法一：
				// use: ['url-loader?limit=100000&name=images/[hash:8].[name].[ext]']
				// 写法二：
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1000000, //大于200000,转图片路径;小于200000,转Base64
						name: 'imgs/[hash:8].[name].[ext]', //加hash值 生成新文件
						outputPath: 'images', //图片打包出去的目录  如果name中写了，此处不写  
					}
				}]
			},
			{
				// 处理ES6
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
				/** 
				 由于babel-preset配置选项较多，我们一般可以在根目录下建立.babelrc文件，专门用来放置babel preset配置，这是一个json文件
				**/
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	watch: true
}
