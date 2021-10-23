function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var [row, col] = input[0].split(" ").map(Number);
    var arr = [];
    for(var i = 1; i <= row; i++){
        arr.push(input[i].trim().split(" ").map(Number));
    } 
    var evenSum = 0;
    var oddSum = 0;
    for(var j = 0; j < row; j++){
        for(var k = 0; k < col; k++){
            if(arr[j][k]% 2){
                evenSum+=arr[j][k];
            }else{
                oddSum+=arr[j][k];
            }
        }
    }
   var res = (evenSum-oddSum);
   console.log(Math.abs(res));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
  
  