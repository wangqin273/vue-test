module.exports = {
	plugins: [
		require('autoprefixer')({
			// browsers: ['last 0 versions'], //必须设置支持的浏览器才会自动添加添加浏览器兼容
			overrideBrowserslist: ['last 4 versions'] //必须设置支持的浏览器才会自动添加添加浏览器兼容
		})
	]
}
