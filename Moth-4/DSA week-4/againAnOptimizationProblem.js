function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var [bag, N] = input[1].trim().split(" ").map(Number);
    var line = 2;
    for(var i = 0; i < testCases;i++){
          
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
  
  