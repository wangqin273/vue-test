<template>
	<div>
		<h2>我是一个入口文件app.js</h2>
		<div id="header">我是头部</div>
		<div class="header">我是背景图片</div>
		<div class="img">我是css3自动后缀</div>
		<img :src="img_url" alt="我是图片"/>
	</div>
</template>
<script>
	// import imgSrc from './src/images/my.jpg';
	export default{
		data(){
			return {
				msg:'Hello Vue',
				img_url:'./src/images/my.jpg', 
			}
		}
	}
</script>

<style>
	body {
		background-color: #F0F8FF;
	}
</style>
