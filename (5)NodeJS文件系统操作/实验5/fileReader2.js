const http=require("http");
const fs=require("fs");
const path=require("path");
var arg1=process.argv[2];
http.createServer(function (req,res) {
   if(fs.existsSync(path.join(__dirname,"/"+arg1))){
        var filePath=path.join(__dirname,"/"+arg1);
        var fid=fs.openSync(filePath,"r+");
        var buf=Buffer.alloc(30);
        var len=fs.statSync(filePath).size;
        fs.readSync(fid,buf,0,len,0);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(buf.toString());
        fs.closeSync(fid);
   }
   else{
        var fileContent1=fs.readFileSync(path.join(__dirname,"/fileReader2.js"));
        res.end(fileContent1.toString());
   }
   res.end();
}).listen(8081);
console.log("server is listening 8081");