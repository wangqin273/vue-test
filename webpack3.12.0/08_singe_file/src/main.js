import Vue from 'vue'
import App from './app.vue'
import './main.css'
import './scss1.scss'
import './less1.less' 
import '@babel/polyfill'

new Vue({
	el: '#app',
	render:c=>c(App),
	// components: {
	// 	App
	// },
	// template: '<App/>',
	created() {
		console.log(Math.random() * 10)
		var array = [1, 2, 3, 4, 5, 6];
		array.includes( (item)=> {
		  return item > 2;
		});
		console.log(array)
		
	}
})