function ntraversal(arr,size){
    var i = 0;
    var a = 0;
    var res = "";
    for(var j = size - 1; j > 0; j--){
        res+= arr[j][i]+" ";
    }
    
    for(var k = 0; k < size; k++){
        res+= arr[k][a]+" ";
        a++;    
    }
    for(var l = size - 2; l >= 0; l--){
        res+=arr[l][size-1]+" ";
    }
    return res;
}
function runProgram(input) {
    // Write code here
   input = input.split("\n");
   var testCases = +input[0];
   var line = 1;
   for(var i = 0; i < testCases; i++){
       var size = +input[line++].trim();
       var arr = [];
       for(var j = 0; j < size; j++){
           arr.push(input[line++].trim().split(" ").map(Number));
       }
   }
   console.log(ntraversal(arr,size))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  
