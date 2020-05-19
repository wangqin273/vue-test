import Vue from '../vue.js'
import App from '../app.js'
import './main.css'
import './scss1.scss'
import './less1.less' 
import '@babel/polyfill'

new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	// render:c=>c(App),
	created() {
		console.log(Math.random() * 10)
		let array = [1, 2, 3, 4, 5, 6];
		let arr = array.includes( (item)=> {
		  return item > 2;
		});
		console.log(arr)
		
	}
})


// let b = 1;
// console.log('b',b+1);
// const name = '张三';
// console.log('name',name);
// let c = '成功了么';
// setTimeout(() => {
//     console.log('setTimeout',c)
// }, 100);
// Babel 输入： ES2015 箭头函数
// [1,2,3].map((n) => n + 1);
// "foobar".includes("foo");
	// let promise =	new Promise();
// const obj = {}, Object.assign(obj, { age: 30 }); 
