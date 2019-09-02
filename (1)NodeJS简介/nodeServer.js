// nodeServer.js

const http = require("http");

var server =new http.Server();
// sever监听客户端的请求
server.on("request",function(req,res){
    res.end("hello world");
})
// server监听窗口
server.listen(8082);
console.log("Server is listening 8082");