// esModule的模块导入
import Vue from '../../js/vue.js'
import App from './App.js'

import {num1,num2,add} from './App.js'
new Vue({
	el:'#app',
	components:{
		App
	},
	template:'<App/>',
	created(){
		console.log('num1',num1)
		console.log('num1',num1)
		console.log('add',add(3,5))
	},	
	
})