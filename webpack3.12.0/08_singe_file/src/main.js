import Vue from 'vue'
import App from './app.vue'
import './main.css'
import './main1.css'
import './scss1.scss'
import './less1.less' 
import './less1.less' 
import '@babel/polyfill'  
import MintUI from 'mint-ui'
// import {Toast,Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'


// Vue.prototype.$toast = Toast;
// Vue.prototype.$indicator = Indicator;
Vue.use(MintUI) 


new Vue({
	el: '#app',
	render:c=>c(App),
	// components: {
	// 	App
	// },
	// template: '<App/>',
	created() { 
		console.log(Math.random() * 10)
		let array = [1, 2, 3, 4, 5, 6];
		array.includes( (item)=> {
		  return item > 2;
		});
		console.log(this)
		// this.$toast('MintUI')
		// this.$indicator.open('请稍等...');
		
		// Toast('Toast')
		// Indicator.open('加载中...');
	}
})