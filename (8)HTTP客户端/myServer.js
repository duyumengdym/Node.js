const http=require("http");
const querystring=require("querystring");
const fs=require("fs");
http.createServer(function(req,res){
    var strData="";
    // var fileContent=fs.readFileSync("data.json");
    // res.write(fileContent);
    req.on("data",function(chunk){
        strData+=chunk;
    })
    req.on("end",function(){
        console.log(strData);
    })
}).listen(8081);