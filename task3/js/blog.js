const http=require('http');
const fs=require("fs");
const path=require("path");
const url=require("url");
const querystring=require("querystring");
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=='/list'){
        showHtml(res,"chapterList.html");
    }else if(pathName=='/login'){
        showHtml(res,"login.html");
    }else if(pathName=='/getList'){
        showList(res);
    }else if(pathName=='/detail'){
        showHtml(res,"chapter.html");
    }else if(pathName=='/getDetail'){
        showContent(res,urlObj);
    }else if(pathName=='/listmanager'){
        showHtml(res,"list.html");
    }
    else if(pathName=='/ok'){
        showList(res);
    }
    else if(pathName=='/pwd'&&req.method=="POST"){
        checkPwd(req,res);
    }else if(pathName=='/addChapter'){
        showHtml(res,"addChapter.html");
    }else if(pathName=='/add'&&req.method=="POST"){
        add(req,res);
    }else if(pathName==="/login_bg.jpg"){
        showJpg(res,"login_bg.jpg");
    }else if(pathName.search("/images") != -1){
        showJpg(res,pathName);
    }else if(pathName.search("/css") != -1){
        showCss(res,pathName);
    }else if(pathName.search("/js") != -1){
        showJs(res,pathName);
    }
}).listen(8083);
console.log("server is listening 8083");
function showHtml(res,filePath) {
    var indexPath=path.join(__dirname,"../"+filePath);
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showJpg(res,imgPath1){
    var imgPath=path.join(__dirname,"../"+imgPath1);
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    res.write(imgContent);
    res.end();
}
function showCss(res,cssPath) {
    var indexPath=path.join(__dirname,"../"+cssPath);
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/css"});
    res.write(fileContent);
    res.end();
}
function showJs(res,filePath) {
    var indexPath=path.join(__dirname,"../"+filePath);
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/javascript"});
    res.write(fileContent);
    res.end();
}
function checkPwd(req,res) {
    var dataStr ="";
    req.on("data",function(chunk){
        dataStr += chunk;
    })  
    req.on("end",function(){
        // console.log(dataStr);
        var userList = [
            {username: "admin", pwd: "admin"}
        ]
        var dataObj=querystring.parse(dataStr);
        if(dataObj.username==userList[0].username && dataObj.password==userList[0].pwd){
            res.end("success");
        }
        else{
            res.end("error");
        }
    })
}
var chapterList = [
    {
        "chapterId": 1,
        "chapterName": "hello ,这是后台取到的数据",
        "imgPath": "images/1442457564979540.jpeg",
        "chapterDes": "注定，有些路，只能一个人走；有些事，",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 1022
    },
    {
        "chapterId": 2,
        "chapterName": "那些不是事",
        "imgPath": "images/1442201163344838-lp.jpg",
        "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    },
    {
        "chapterId": 3,
        "chapterName": "只想，留住心中的那份静美",
        "imgPath": "images/1442642178239101-lp.jpg",
        "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 202
    },
    {
        "chapterId": 4,
        "chapterName": "所以才会美",
        "imgPath": "images/1442539025939884-lp.jpg",
        "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    }
]
function showList(res) {
    var listStr=JSON.stringify(chapterList);
    // console.log(listStr);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}

// function showAllList(res) {
//     var listStr=JSON.stringify(chapterList);
//     // console.log(listStr);
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.write(listStr);
//     res.end();
// }
function showContent(res,urlObj) {
    var listStr=JSON.stringify(chapterList[(urlObj.query.chapterId)-1]);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}
function add(req,res) {
    var dataStr ="";
    req.on("data",function(chunk){
        dataStr += chunk;
    })  
    req.on("end",function(){
        var l=chapterList.length+1;
        var dataObj=querystring.parse(dataStr);
        var obj={
            "chapterId":l,
            "chapterName": dataObj.title,
            "chapterContent": dataObj.content,
        }
        chapterList.push(obj);
        res.end("success");
    })
}