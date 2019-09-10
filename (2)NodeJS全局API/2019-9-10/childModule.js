function sayHello() {
    console.log("hello world");
}
var userName="zhangsan";
function showName() {
    console.log(userName);
}

module.exports = {
    sayHello:sayHello,
    showName:showName,
    userName:userName
}