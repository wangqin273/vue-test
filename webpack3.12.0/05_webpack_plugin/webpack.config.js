var path = require('path');//基于nodeJs
const  HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		filename: './build.js',
		path:path.resolve('./dist')//相对路径转绝对路径
	},
	// 声明模块 包含各个loader
	module: {
		// module 第二种写法 rules
		rules: [{
				test: /\.css$/,
				// rules 第1种写法 （常用，方便添加配置项） 
				use: ['style-loader', 'css-loader', 'postcss-loader']  

			}, {
				test: /\.scss$/,
				// rules 第2种写法 loader
				use: ['style-loader', 'css-loader', 'sass-loader'] //顺序不能变
			}, {
				test: /\.less$/,
				// rules 第3种写法
				loader: ['style-loader', 'css-loader', 'less-loader']
			}, {
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

		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	watch: true
}
