const http=require('http');
const querystring=require("querystring");
var username=process.argv[2];
var password=process.argv[3];
var postData={"username":username,"password":password};
postData=querystring.stringify(postData);
var options={
    host:"localhost",
    port:8081,
    path:"/",
    method:'post'
}
var req=http.request(options,function(res){});
req.write(postData);
req.end();