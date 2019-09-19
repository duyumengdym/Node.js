
// 异步 读文件就读 不会等待 后面代码正常执行

const http=require("http");
const fs=require("fs");
const path=require("path");
var filePath=process.argv[2];
http.createServer(function (req,res) {
    if(filePath==undefined){
        var str="";
        /*
            fs.readFile()是一个异步方法，执行到该句不会等待文件读取完成，就直接执行后面的语句
            回调函数是等到文件读取完之后才执行
        */
        fs.readFile(process.argv[1],function (err,data) {//当前的 process.argv[1]
            if(err){
                console.log(err);
            }else{
                console.log(data.toString());//data是buffer数据
                str=data.toString();
                res.end(str);
            }
        })
       //res.end(str) 文件还没读完回调函数不会执行
    }else{
        var pathName=path.join(__dirname,filePath);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function (err,data) {//当前的 process.argv[1]
                if(err){
                    console.log(err);
                }else{
                    res.end(data.toString());
                }
            })
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("文件不存在");
        }
    }
}).listen(8081);
console.log("server is listening 8081");