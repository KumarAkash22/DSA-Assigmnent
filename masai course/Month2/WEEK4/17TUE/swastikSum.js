function sum1 (arr,row,col){
    sumA = 0;
    var i = 0;
    for(var j = col-1; j > Math.floor(col/2); j--){
        sumA+=arr[i][j];
    }
    for(var k = 0; k < row; k++){
        sumA+=arr[k][Math.floor(col/2)];
    }
    for(var l = Math.floor(col/2)-1; l >= 0; l--){
        sumA+=arr[row-1][l];
    }
    return sumA
}
function sum2(arr, row, col){
    var sumB = 0;
    var i = 0;
    for(var j = 0; j < Math.floor(row/2); j++){
        sumB+=arr[j][i];
    }
    for(var k = 0; k < col; k++){
        sumB+=arr[Math.floor(row/2)][k]
    }
    for(var l = row-1; l >= Math.ceil(row/2); l--){
        sumB+=arr[l][col-1];
    } 
    return sumB;
}
function runProgram(input) {
    input = input.split("\n");
    var [row, col] = input[0].split(" ").map(Number);
    var line = 1;
    var arr = [];
    for(var i = 0; i < row; i++){
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    var func1 =(sum1(arr, row, col));
    var func2 = (sum2(arr, row, col));
    var res = Math.abs(func1 - func2);
    console.log(res)
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    `);
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
  
  

  