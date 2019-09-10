const http = require("http");

var server= http.createServer(function(req,res){  //response
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("<h1>hello world</h1>");
    // res.write("hello world");
    // 响应结束
    res.end();
});

server.listen(8081);
console.log("sever is listening 8081");
// 1、shift +鼠标右键 点击打开power shell窗口
// 2、编译node.js文件 node+文件名
// 3、每次修改了js文件后，需要重新执行node+文件名  Ctrl+c
// 4、在node中的js文件，必须得编译才能执行
// 5、WebStorm



// http协议 状态码