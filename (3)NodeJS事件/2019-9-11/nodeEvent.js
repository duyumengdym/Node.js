// 1、引入events模块
const events=require("events");
// 2、实例化event对象
var eventEmitter=new events.EventEmitter();
// 3、绑定事件，事件监听
//once表示触发一次事件
eventEmitter.on("hello",function (arg1,arg2) {
    console.log("hello world");
    console.log(arg1,arg2);
})
// 4、触发事件，可以进行参数的传递
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");//可以进行多次的事件触发