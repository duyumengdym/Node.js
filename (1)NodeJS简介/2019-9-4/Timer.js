var timeId=setInterval(function(){
    console.log("game over");
},1000);
//组织延时执行或定时执行，回调函数的执行
timerId.unref();
timerId.ref();