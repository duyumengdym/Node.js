const fs=require("fs");
const path=require("path");
var fileName=process.argv[2];
var pathName=path.join(__dirname,fileName);
if(fs.existsSync(pathName)){
    var statObj=fs.statSync(pathName);
    if(statObj.isFile()){
        fs.unlinkSync(pathName);
    }else{
        delDir(pathName);
    }
}else{
    console.log("not exist");
}
function delDir(pathName) {
    var files=fs.readdirSync(pathName);
    var pathName1=pathName;
    console.log(files);
    for(var i=0;i<files.length;i++){
        pathName=path.join(__dirname,'/'+fileName+'/'+files[i]);
        var statObj=fs.statSync(pathName);
        if(statObj.isFile()){
            fs.unlinkSync(pathName);
            fs.rmdir(pathName1,function (err,data) {
                if(err){
                    console.log(err);
                }
            });
        }else if(statObj.isDirectory()){
            delDir(pathName1);
        }
    }
}