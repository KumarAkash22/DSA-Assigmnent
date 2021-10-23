function Bound (arr,row){  
    var sum = 0;
    var i = 0;
    
    for(var j = 0; j < row-1;j++){
        sum+=arr[i][j];
    }
    for(var k = 0; k < row -1; k++){
        sum+=arr[k][row-1];
    }
    for(var l = row-1; l > 0; l--){
        sum+=arr[row-1][l]
    }
    for(var m = row - 1; m > 0; m--){
        sum+=arr[m][i];
    }
    return sum;
}
function Diag(arr,row){
var sum = 0;
var i = 1;
var a = row - 2
for(var j = 1; j < row-1; j++){
    sum+=arr[i][j];
    i++;
}
for(var k = 1; k < row-1 ; k++){
    sum+= arr[k][a];
    a--
}
if(row%2==1){
sum = sum - arr[Math.floor(row/2)][Math.floor(row/2)];
}
return sum;
}
function runProgram(input) {
    input = input.split("\n");
    var row = +input[0];
    var line = 1;
    var arr = [];
    for(var i = 0; i < row; i++){
        arr.push(input[line++].trim().split(" ").map(Number));  
    }  

    var b = (Bound(arr,row));
    var d = (Diag(arr,row));
    console.log(b+d);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`8
    21 12 12 334 1112 32322 221 212
    53 2342 12 232 121 1235 979 7
    23 3422 445 22 233 2234 235 235
    32 35 323 232 334 232 32 32
    21 12 12 334 1112 32322 221 212
    53 2342 12 232 121 1235 979 7
    23 3422 445 22 233 2234 235 235
    32 35 323 232 334 232 32 32`);
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
  
  