import Vue from '../vue.js'
import App from '../app.js'
import './main.css'
import './scss1.scss'
import './less1.less'
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	created() {
		console.log(Math.random() * 10)
	}
})
