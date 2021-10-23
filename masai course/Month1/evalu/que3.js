function runProgram(input) {
    input = input.trim().split();
    var testCases = +input[0];
    var j = 1;
    for(var i = 0; i < testCases; i++){
        var [size, targ] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number); 
    }
    console.log(size, targ,arr);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 0
    1 2 3
    5 4
    3 2 3 1 5`);
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
  
  