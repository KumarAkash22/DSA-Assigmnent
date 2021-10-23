function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var total = +input[0];
    var line = 1;
    for(var i = 0; i < total; i++){
        var res = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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
  
  