function runProgram(input) {
    // Write code here
    var input = input.split("\n").map(Number);
    var size = input[0];
    var array = input[1];
    var result = "";
    for(var i = size-1; i >= 0; i++){
        result+=array[i]+ " ";
    }
    console.log(result);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    1 3 2 4 5`);
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
  
  