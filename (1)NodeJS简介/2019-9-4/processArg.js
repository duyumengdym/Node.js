// 1、传入命令行参数，是一个算数运算式   1*2+3（第三个值才是自己传进来的 前两个参数是固定的）

// 提示:process.argv[2]

// 2、程序将算数运算式计算得到的结果，并且在控制台输出
// 1*2 +3 =5   eval()运算式结果
// 3、程序判断一下是否传入了命令行参数，如果没有传入
// 控制台输出，“命令行参数错误！”
// console.log(eval(1+2*3));

// process.argv 获取命令行参数
// process.argv是一个数组，默认会有两个数组元素
// process.argv[0]表示的node的可执行文件所在路径
// process.argv[1]表示当前执行脚本文件所在的路径
// process.argv[2]表示其他命令行参数

var arg1=process.argv[2];
if(process.argv[2]==undefined){
    console.log("命令行参数错误！");
}else if(arg1=="-help"){
    console.log("帮助：命令参数需为算数运算式")
}
else{
    var result=eval(arg1);
    console.log(arg1+"=%s",result);
}