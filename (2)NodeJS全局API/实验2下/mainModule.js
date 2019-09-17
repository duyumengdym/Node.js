// 实验二 

var circle=require("./circleModule.js");
var r=process.argv[2];
console.log("圆的半径:"+r);
console.log("圆的周长"+circle.circleFun(r).circumference());
console.log("圆的面积"+circle.circleFun(r).area());



// 三种模块类型
// 1、原生模块，随node环境安装就存在的
// 2、自定义模块，自己编写的程序
// 3、第三方模块，在命令行中进行安装的模块，从npm服务器上下载到本地 直接require("date-now")