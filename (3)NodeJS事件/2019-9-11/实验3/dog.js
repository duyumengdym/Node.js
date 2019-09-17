//原生模块
const events=require("events");
const EventEmitter=events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);//DOg实例化中的this.dog
    this.name=name;
    this.energy=energy;
}
Dog.prototype.__proto__=EventEmitter.prototype;
module.exports={
    Dog:Dog
}
