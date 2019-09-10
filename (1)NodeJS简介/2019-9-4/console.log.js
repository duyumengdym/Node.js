// 1、检测代码是否执行到console.log的位置
// 2、可以输出一些变量的值，判断程序的执行状态

// 占位符 %d %s %j 
// %s 表示字符串
// %d 表示数字
// %j 表示JSON

var user={
    username:"zhangsan",
    age:20,
    qq:"213797241"
}
console.log("username:%s",user.username);
console.log("age:%d",user.age);
console.log("user %j",user);