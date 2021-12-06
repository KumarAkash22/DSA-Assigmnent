function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for(var i = 0; i < testcase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(N,arr);
        var mini = Math.min.apply(Math,arr);
    }
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5`);
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
  
  