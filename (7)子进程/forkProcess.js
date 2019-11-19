console.log("ok")
const cp=require("child_process");

var fork1=cp.fork("childProcess.js",["javaScript"]);

fork1.on("close",function (chunk) {
    console.log(chunk.toString());
})