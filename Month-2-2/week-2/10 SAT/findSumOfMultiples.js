function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var n = input[0];
    var k = input[1];
    var y = input[2];
    var result = n * k + n * y;
    console.log(result);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 10 5`);
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
  
  