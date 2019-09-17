const events=require("events");
const EventEmitter=events.EventEmitter;
function Radio(name,FM) {
    this.name=name;
    this.FM=FM;
    EventEmitter.call(this);
    var that=this;
    function  play() {
        that.emit("playing");
    }
    function stop() {
        that.emit("stoping");
    }
}
var radio=new Radio("music radio","FM 106.7 opened");
radio.on("play",function () {
    console.log(this.name+"can brake");
})