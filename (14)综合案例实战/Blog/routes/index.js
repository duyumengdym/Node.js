var express = require('express');
var router = express.Router();
const data = require('../data.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  //封装函数
  function showMessage(message,res){
    var result=`<script>alert('${message}');history.back()</script>`;
    res.send(result)
  }
  if(username==data.users[0].username&&password==data.users[0].password){
    res.redirect('list'); 
  }else{
    showMessage("用户名或密码错误",res);
  }
});

router.get('/list', function(req, res, next) {
  res.render('list',{list:data.chapterList});
});
module.exports = router;
