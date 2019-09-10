// 实验二 程序6

var arg1=process.argv[2];
if(arg1==undefined||arg1=="-h"){
    console.log("未检测到参数，请输入数学运算式");
}else{
    var result=eval(arg1);
    console.log(arg1+"=%s",result);
}