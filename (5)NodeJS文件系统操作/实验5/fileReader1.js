const http=require("http");
const fs=require("fs");
const path=require("path");
var arg1=process.argv[2];
var filePath=path.join(__dirname,"/"+arg1);
http.createServer(function (req,res) {
    fs.readFile(filePath,function (err,data) {
        if(arg1==undefined){
            var fileContent1=fs.readFileSync(path.join(__dirname,"/fileReader1.js"));
            res.end(fileContent1.toString());;
        }else if(fs.existsSync(filePath)){
            res.end(data);
        }else if(err){
            console.log(err);
        }
    })
}).listen(8081);
console.log("server is listening 8081");
