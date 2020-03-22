import imgSrc from './images/my.jpg'
var app = {
	data(){
		return{
		img_url:	imgSrc
		}
	},
	template:`
	<div>
	<h2>我是一个入口文件app.js</h2>
	<div id="header">我是头部</div>
	<div class="header">我是背景图片</div>
	<div class="img">我是css3自动后缀</div>
	
	<img :src="img_url" alt="我是图片"/>
	
	</div>
	`
}
export default app;