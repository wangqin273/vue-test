var path = require('path'); //基于nodeJs 
const webpack = require('webpack'); //访问内置的插件
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const packagejson = require('./package.json');
module.exports = {
	mode: 'production',
	entry: {
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
		// new VueLoaderPlugin(),

	],
	/**
	 * webpack中实现代码分割的两种方式：
	 * 1.同步代码：只需要在webpack配置文件总做optimization的配置即可
	 * 2.异步代码(import)：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中
	 */
	optimization: {
		splitChunks: {
			chunks: "all", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
			minSize: 30, //字节 引入的文件大于30kb才进行分割
			//maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
			minChunks: 1, //模块至少使用次数
			maxAsyncRequests: 5, //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
			maxInitialRequests: 3, //首页加载的时候引入的文件最多3个
			automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
			name: true, //缓存组里面的filename生效，覆盖默认命名
			cacheGroups: { //缓存组，将所有加载模块放在缓存里面一起分割打包
				vendors: { //自定义打包模块
					test: /[\\/]node_modules[\\/]/,
					priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
					filename: 'vendors.js',
				},
				default: { //默认打包模块
					priority: -20,
					reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
					filename: 'common.js'
				}
			}
		}
	},
	watch: true
}
