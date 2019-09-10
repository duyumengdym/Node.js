
// process.pid进程的id值，唯一标识
// process.argv 获取当前程序的命令行参数
// process.argv是一个数组，默认会有两个数组元素
// process.argv[0]标识的是node可执行文件所在路径
// process.argv[1]表示当前执行脚本文件所在的路径

console.log(process.pid);

console.log(process.platform);


console.log(process.argv);

// console.log(process.cwd());