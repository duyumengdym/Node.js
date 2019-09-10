// var Bomb=new Function()
function Bomb()
{}
Bomb.prototype.explode=function(){
    console.log(this);
    console.log(this.message);
}
Bomb.prototype.message="bomb!!";
 var b=new Bomb();
setTimeout(function(){
    b.explode();
},2000);
// setTimeout(bomb.explode.bind(bomb),2000)
