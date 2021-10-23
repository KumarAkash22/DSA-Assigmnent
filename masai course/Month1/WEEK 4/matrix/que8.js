function runProgram(input) {
    input = input.split("\n");
    var [row, col, targ] = input[0].trim().split(" ").map(Number);
    var arr = [];
    for(var i = 1; i <= row; i++){
        arr.push(input[i].trim().split(" ").map(Number));
    }  
       // console.log(arr, targ)
       sum = 0;
       count = 0;
        res = "";
       for(var j = 0; j < row; j++){
           for(var k = 0; k < col; k++ ){
               if (k<arr[j].length-2){ 
                   var sum = arr[j][k] + arr[j][k+1] + arr[j][k+2];
                   if (sum == targ){ 
                   count++;
                   console.log(count,sum);
                }
            }
        }
        
    }
       
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 3 6
    3 4 1
    2 2 2
    1 5 1`);
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
  
  