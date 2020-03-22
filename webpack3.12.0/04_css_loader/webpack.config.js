module.exports = {
	entry: './main.js',
	output: {
		filename: 'build.js'
	},
	// 声明模块 包含各个loader
	module: {
		// module 第一种写法
		// loaders: [{
		// 		// style-loader, css-loader
		// 		// 遇到后置位.css的文件，webpack先用 css-loader家长群去解析这个文件
		// 		// 最后计算完css,将会使用style-loader生产一个内容为最终解析完的css代码style标签
		// 		//webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader, css-loader去加载这个文件
		// 		/* cnpm install sass-loader@7.3.1 --save-dev */
		// 		test: /\.css$/,
		// 		loader: 'style-loader!css-loader'
		// 		// loader: ['style-loader', 'css-loader']
		// 	},
		// 	{
		// 		// cnpm install sass-loader --save-dev
		// 		test: /\.scss$/,
		// 		// 注意 是sass-loader ，不是 scss-loader
		// 		loader: ['style-loader', 'css-loader', 'sass-loader']
		// 	},
		// 	{
		// 	    test: /\.(png|jpg|gif|svg)$/,
		// 	    loader: ['url-loader?limit=1000000']
		// 	}
		// ]
		// module 第二种写法 rules
		rules: [{
				test: /\.css$/,
				// rules 第1种写法 （常用，方便添加配置项）
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: { 
							importLoaders: 1
						}
					}, 'postcss-loader'
				]
				// use: ['style-loader', 'css-loader', 'postcss-loader']  

			}, {
				test: /\.scss$/,
				// rules 第2种写法 loader
				use: ['style-loader', 'css-loader', 'sass-loader'] //顺序不能变
			}, {
				test: /\.less$/,
				// rules 第3种写法
				// loader: ['style-loader', 'css-loader', 'less-loader']
				loader: 'style-loader!css-loader!less-loader'
			}, {
				// 处理图片
				test: /\.(png|jpg|gif|svg)$/,
				// 写法一：
				// use: ['url-loader?limit=100000&name=images/[hash:8].[name].[ext]']
				// 写法二：
				use: [{
					loader: 'url-loader',
					options: {
						limit: 100000, //大于200000,转图片路径;小于200000,转Base64
						name: 'imgs/[hash:8].[name].[ext]', //加hash值 生成新文件
						outputPath: 'images', //图片打包出去的目录  如果name中写了，此处不写  
					}
				}]
			},

		]
	},
	// plugins:[
	// 	new HtmlWebpackPlugin({
	// 		template:'./src/index.html'
	// 	})
	// ],
	watch: true
}
