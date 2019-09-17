//1.引入http原生模块
const http = require("http");
const fs=require("fs");
const url=require("url");
//2.创建一个服务器
var server=http.createServer(function(req,res){
    //4、当客户端的http请求发起的时候，才会执行回调函数里面的内容
    // 5、process.platform得到当前系统
    var urlObj=url.parse(req.url);
    var urlPathName=urlObj.pathname;
    console.log(urlPathName);
    // console.log(urlObj);

    // console.log(req.url); //资源发起请求
    var sys=process.platform;
    // console.log(sys);
    var htmlPath="";
    switch(sys){
        case "linux":
            htmlPath=__dirname + "/view/index.html";
            break;
        case "win32":
            htmlPath=__dirname + "\\view\\index.html";
            break;
        default:
            console.log("unkown system");
            break;
    }

    // var htmlPath=__dirname + "\\view\\index.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
    console.log(htmlPath);
    // console.log(htmlContent);
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");