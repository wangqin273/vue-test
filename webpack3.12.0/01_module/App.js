var app = {
	template:`
	<div>我是一个入口文件</div>
	`
}
export var num1=2;
var num2 =3;
export{num2}
export function add(x,y){
	return x*y
}
export default app;