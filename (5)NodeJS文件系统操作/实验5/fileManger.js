const fs=require("fs");
const path=require("path");
var i=1;
var obj={};
var message=["请输入要创建的文件夹","请输入要创建的文件","请输入要删除的文件"];
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==3){
        console.log(obj);
        process.exit();
    }else if(i==1){
        var file1=obj[message[i-1]].split(" ");
        console.log(file1);
        fs.mkdirSync(file1[1].slice(0,-2));
        console.log("文件目录创建成功");
        console.log(message[i++]+":");
    }else if(i==2){
        var file2=obj[message[i-1]].split(" ");
        fs.mkdirSync("/"+obj[message[i-2]].split(" ")[1].slice(0,-2)+"/"+file2[1].slice(0,-2));
        console.log("文件创建成功");
        console.log(message[i++]+":");
    }
})