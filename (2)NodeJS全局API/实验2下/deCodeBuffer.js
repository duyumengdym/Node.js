var base64Str = "emhhbmdzYW46MTIzNDU2";
var str=Buffer.from(base64Str,"base64");
var result=str.toString('utf8');
var user=result.split(":");
console.log("用户名:"+user[0]+" "+"密码:"+user[1]);