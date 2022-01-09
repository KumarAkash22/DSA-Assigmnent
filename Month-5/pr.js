// function a (b){
// console.log("function in a")
// b();
// }
// a(function b () {
//     console.log("function in b")
//   })

// function count(x,y){
//     if(y!=1){
//         if(x!=1){
//             console.log("*")
//             count(x/2,y)
//         }
//         else{
//             y=y-1;
//             count(4,y)
//         }
//     }
// }
// count(4,4)

function fun (n,sum){
    k = 0; j = 0;
    if(n == 0){
        return sum;
    }
    k = n%10;
    j = n/10;
    sum+=k;
    fun(j,sum);
    console.log(k);
}
var a = 2048;
var sum = 0;
fun(a,sum)
console.log(sum)