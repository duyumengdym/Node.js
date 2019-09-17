var Dog=require("./dog.js");
var dog1=new Dog("taidi",4);
function barkFun() {
    console.log(this.name+"barked!");
    console.log(this.energy);
}
dog1.on("bark",barkFun);
var Interval=setInterval(function () {
    if(dog1.energy>=0){
        dog1.emit("bark");
    }else{
        clearInterval(Interval);
        Interval.unref();
    }
    dog1.energy=dog1.energy-1;
},1000);