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
	created() {
		console.log(Math.random() * 10)
		var array = [1, 2, 3, 4, 5, 6];
		array.includes( (item)=> {
		  return item > 2;
		});
		
	}
})


let b = 1;
console.log('b',b);
const name = '张三';
console.log('name',name);
let c = '成功了么';
setTimeout(() => {
    console.log('setTimeout',c)
}, 100);
// Babel 输入： ES2015 箭头函数
[1,2,3].map((n) => n + 1);
"foobar".includes("foo");
	let promise =	new Promise();
// const obj = {}, Object.assign(obj, { age: 30 }); 
