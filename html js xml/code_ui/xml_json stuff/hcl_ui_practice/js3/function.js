function foo(callback, callback2){
    callback();
    callback2();
}

foo(function(){
    console.log("i am the champion");
}, function(){
    console.log("u too champion");
})

// function foo(value){
//     console.log('i am foo function:'+value)
// }

// function bar(callback, value){
//     // i want to call this iff it is function
//     if(typeof(callback)==="function"){

//         callback(value);
//     }else
//     console.log("dont work")
    
// }
// //higher order function : if u pass a function in to another function, 
// //it support call buck

// bar(foo,"raja");