const fs=require("fs");
const path=require("path");
var filePath=path.join(__dirname,"/file.txt");
fs.unlinkSync(filePath);//删除必须指向的是一个文件
// 删除文件 unlinkSync(文件路径)