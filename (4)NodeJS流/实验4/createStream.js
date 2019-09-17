const stream=require("stream");
var reader=new stream.Readable();
function MyReadable() {
    for(var i=0;i<26;i++){    
        reader.push(String.fromCharCode(97+i));
    }
    reader.push(null);
    reader.pipe(process.stdout);
}
MyReadable.prototype.__proto__=reader.prototype;
var read=new MyReadable();
