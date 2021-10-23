//    var array = [];
//     var top = -1;
// function push(data){
    
//     array[++top] = data;
//     return array;
// }
// console.log(push(2));
// console.log(push(3));
var res = [2,3,4,4,4,5]
function pop(){
    if (top == -1){
     return "Empty Stack"
    }
    var ans = array[top];
    top--;
    
    return ans;
}
console.log(pop());
console.log(pop());
// function peek(){
//     if (top == -1) return "Empty Stack"
//     return array[top]
// }

//pop()