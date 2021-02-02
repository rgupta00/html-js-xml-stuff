//how callback can help to improve the code : strategy DP in js
var add=(a, b)=> a+b;

var multiply=(a, b)=> a*b;


var divide=(a, b)=> a/b;

var rem=function(a, b){
    return a%b;
}
// OCP : open for extenion close for modification
var cal=function(a, b , callback){
        return callback(a, b);
}

console.log(cal(3,4,(a, b)=> a/b));


// console.log("start");
// setTimeout(()=>console.log('i am going to be called....'),1000);
// console.log("end");