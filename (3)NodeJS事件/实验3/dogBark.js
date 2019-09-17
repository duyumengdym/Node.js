var dog=require("./dog.js");
const events=require("events");
var dog1=new dog.Dog("taidi",4);
var dog2=new dog.Dog("zangao",8);
const eventEmitter=new events.EventEmitter;
eventEmitter.on("bark",function(n,e){
    var timer;
    if(e>0){
        timer=setInterval(function () {
            console.log(n+" barked!" +" "+"energy:"+e);    
            e=e-1;
            if(e<0){
                clearInterval(timer);
        }
    },1000);
}
})
eventEmitter.emit("bark",dog1.name,dog1.energy);
eventEmitter.emit("bark",dog2.name,dog2.energy);