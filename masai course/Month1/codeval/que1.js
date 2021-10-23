function runProgram(input) {
    // Write code here
   input = input.split(" ").map(Number);
    var A = input[0];
    var B = input[1];
    var C = input[2];
    var D = input[3];
    var E = input[4];
    var sum = A+ B+ C + D + E;
    console.log(sum);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1 2 3 4 5`);
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
  
  