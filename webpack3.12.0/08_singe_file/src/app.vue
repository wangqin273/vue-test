<template>
	<div>
		<h2>我是一个入口文件app.js</h2>
		<ul>
			<li v-for="item in phone"> <img v-lazy="item" alt=""> </li>
		</ul>
		<div id="header">我是头部</div>
		<div class="header">我是背景图片</div>
		<div class="img-bg">我是css3自动后缀</div>
		<img class="img" v-lazy="img_url" alt="我是图片" />
	</div>
</template>
<script>
	// import imgSrc from './src/images/my.jpg';
	// const imgSrc = require( './src/images/my.jpg')
	export default {
		data() {
			return {
				msg: 'Hello Vue',
				img_url: "./src/images/my.jpg",
				phone: [
					'./src/assets/phone1.png',
					'./src/assets/phone2.png',
					'./src/assets/phone3.png',
					'./src/assets/phone4.png'
			]
		}
	},
	created() {
		// this.img_url = imgSrc;
		console.log('imgSrc')
	}
	}
</script>

<style>
	body {
		background-color: #F0F8FF;
	}
</style>
