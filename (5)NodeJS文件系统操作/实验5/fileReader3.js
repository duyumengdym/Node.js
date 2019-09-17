const fs=require("fs");
const http=require("http");
const path=require("path");
var arg1=process.argv[2];
var filePath=path.join(__dirname,"/"+arg1);
http.createServer(function(req,res) {
    if(fs.existsSync(filePath)){
        var streamReader=fs.createReadStream(filePath);
        streamReader.pipe(res);
    }else{
        var streamReader1=fs.createReadStream(path.join(__dirname,"/fileReader3.js"));
        streamReader1.pipe(res);
    }
}).listen(8081);

console.log("server is listening 8081");