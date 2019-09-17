var username=process.argv[2];
var password=process.argv[3];

if(username !=undefined&&password!=undefined){
    var login=username+":"+password;
    var str=Buffer.from(login,"utf-8");
    var result=str.toString("base64");
    console.log("用户名:"+username.toString("utf8"));console.log("密码:"+password.toString("utf8"));
    console.log("base64加密："+result);
}else{
    console.log("用户名或密码不能为空");
}