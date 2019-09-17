//初始化一个buffer
var buf=Buffer.alloc(10);
console.log(buf);
// 将一个utf-8编码的字符串转化为buffer数据
var buf1=Buffer.from("hello","utf-8");
var base64Str=buf1.toString("base64");//toString 是显示上的转换 不是真正的转换（Buffer.from） buffere是中介
console.log(base64Str);
var buf2=Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf8"));
