function runProgram(input) {
    // Write code here
    input =input.split("\n")
    var dim = input[0].trim().split(" ").map(Number);
     var row = +dim[0];
     var col = +dim[1];
     var arr = [];
     for(var i = 1; i <= row; i++){
       arr.push(input[i].trim().split(" ").map(Number));
        
     }
//console.log(arr)
var res = [col][row];
    for(var j = 0; j < row; j++){
      for(var k = 0; k <col; k++){
        arr[j][k];
        
      }
      console.log(arr[k][j])
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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
  
  