const events=require("events");
const util = require('util');

const EventEmitter=events.EventEmitter;
function Radio(radioName,radioHz){
    EventEmitter.call(this);//DOg实例化中的this.dog
    this.radioName=radioName;
    this.radioHz=radioHz;
}
// Radio.prototype.__proto__=EventEmitter.prototype;
util.inherits(Radio,EventEmitter);
module.exports={
    Radio:Radio
}