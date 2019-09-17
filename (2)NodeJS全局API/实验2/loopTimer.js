// 实验二 程序4

function loop(){
    console.log('i will loop forever')
}
var time,time2;
time=setInterval(function(){
    loop();
},500);
time2=setTimeout(function(){
    clearInterval(time);
    console.log("Game Over");
    process.exit();
},5000);
