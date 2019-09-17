const http=require("http");
const fs=require("fs");//读文件内容
const path=require("path");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/views/view.html");//join相对路径
    var fileContent=fs.readFileSync(filePath);
    fileContent=fileContent.toString('utf8');
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    console.log(filePath);
    res.end();
}).listen(8080);
console.log("server is listening 8080");