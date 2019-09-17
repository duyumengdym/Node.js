function Bomb()
{}
Bomb.prototype.explode=function(){
    console.log(this.message);
}
Bomb.prototype.message="bomb!!";
 var b=new Bomb();
setTimeout(function(){
    b.explode();
},2000);
