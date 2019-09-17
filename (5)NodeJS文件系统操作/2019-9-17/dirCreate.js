const fs=require("fs");
const path=require("path");
fs.mkdirSync("hello");

var list=fs.readdirSync(__dirname);
console.log(list);

var  files=fs.readdirSync(path.join(__dirname,"/node"));
fs.unlinkSync(path.join(__dirname,"/node/"+files[0]));//删文件需要考虑当前要删的文件夹是否有其他文件夹
fs.rmdirSync(path.join(__dirname,"/node"));
