var circle=require("./circleModule1.js");
var r=process.argv[2];
console.log("圆的半径:"+r);
circle.circumference(r);
circle.area(r);
// circle.circumference(3);
// circle.area(3);
