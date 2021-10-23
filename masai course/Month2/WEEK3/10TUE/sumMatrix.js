function sumMatrix(arr1,row,col){
    matrixSum = 0;
    for(var a = 0; a <row; a++){
        for(var b = 0; b < col; b++){
            matrixSum+=arr1[a][b];
        }
    }
    return matrixSum;
}
function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var arr1 = [];
    var arr2 = [];
    var [row , col] = input[0].trim().split(" ").map(Number);
    
    for(var i = 1; i <= row; i++){
      arr1.push(input[i].trim().split(" ").map(Number));  
    }
    var [row1 ,col1] = input[row+1].trim().split(" ").map(Number);
    
    
    for(var j = row+2; j <= row+row1+1; j++){
        arr2.push(input[j].trim().split(" ").map(Number));
        
    }
    
        var matrix = sumMatrix(arr1,row,col);
        var matrix2 = sumMatrix(arr2,row1,col1);
        if(matrix>matrix2){
            console.log(matrix);
        }else{
            console.log(matrix2);
        }
    }
  
    
  
  if (process.env.USERNAME === "admin") {
    runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`);
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
  
  