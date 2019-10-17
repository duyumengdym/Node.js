/**
 * 请求localhost:8081
 * 响应列表
 * <ul>
 *     <li> 
 *         <a href="/file?fileId=" >文件名称</a>
 *     </li>
 *     <li> 
 *         <a href="/file?fileId=" >文件名称</a>
 *     </li>
 * </ul>
 * 点击超链接时，将超链接对应的文件内容，相应到页面上
 * 显示
 */
 const http = require("http");
 const url = require("url");
 const path = require("path");
 const fs = require("fs");

 http.createServer(httpManager).listen(8080)
 function httpManager(req, res) {
    var reqObj = url.parse(req.url, true);
    console.log(reqObj);
    var pathName = reqObj.pathname;
    switch(pathName) {
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile(reqObj, res);
            break;
        default:
            res.end("error");
            break;
    }
 }
 var fileList = ["t1.txt", "t2.txt"];
 function showIndex(res) {
    var str = "<ul>";
    for(var i = 0; i < fileList.length; i++) {
        console.log(fileList[i]);
        var liNode = "<li><a href='/file?fileId=" + i + "' >" +
                          fileList[i] + "</a></li>";//Id后面缺等号
        str += liNode;
    }
    str = str + "</ul>";

    // console.log(str1);//ReferenceError（引用错误） str1 is not defined str1在使用前未定义 
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(str);
    res.end();
 }

 function showFile(reqObj, res) {
     var fileId = reqObj.query.fileId;
     console.log(fileId);
     var fileName = fileList[fileId];
     var filePath = path.join(__dirname, "/" + fileName);
     var fileContent = fs.readFileSync(filePath);//ReferenceError:fs is not defined fs未定义因为fs模块还未引用
     res.end(fileContent);
 }