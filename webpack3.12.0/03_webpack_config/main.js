// esModule的模块导入
import Vue from '../../js/vue.js'

// import App from './App.js'
// import {num1,num2,add} from './App.js'
import * as obj from './App.js'
new Vue({
	el:'#app',
	components:{
		App:obj.default
	},
	template:'<App/>',
	created(){
		console.log('num1',obj.num1)
		console.log('num2',obj.num2)
		console.log('add',obj.add(4,8))
	},	
	
})