//javascript dont support function overloading
//II
function add(a, b,c){
    var sum=0;
   
    for(var counter=0;counter<arguments.length; counter++ ){
        sum+=arguments[counter];
    }
    return sum;
}