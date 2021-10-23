function runProgram(input) {
    // Write code here
    input = input.split("/n");
    var newInput = +input[0];
    var j = 1;
    for(var i =1; i <= newInput; i++){
        var [row, col] = input[j++].trim().split(" ").map(Number);
        var arr = [];
        for(var  k =0 ; k < row; k++){
            arr.push(input[j++].split(" ").map(Number));
        }
        console.log(arr);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    3
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
  
  