

// function addNum(number) {
//     if(number%3==0){
//         return true;
//     }else {
//         return false;
//     }

// }    

// var limit =20;
// for(var i = 1; i<=limit;i++){
//     if(addNum(i)){
//         console.log(i);
//     }
// }


function toUpperCase(char){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(var i = 0; i<lower.length; i++){
        if(lower[i]==char){
            return upper[i];
        }
    }
    return char;
}

var names = "Akashkumar";
output = "";
for(var i = 0; i<names.length; i++){
     output=output+toUpperCase(names[i]);  
}
console.log(output);


