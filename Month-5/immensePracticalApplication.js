function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i < testcases; i++){
        var str1 = input[line++].trim();
        var str2 = input[line++].trim();
        var dp = Array(str1.length).fill().map(() => Array(str2.length).fill(1));
        console.log(dp)
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    abc
    abde
    a
    ab
    ak
    abxde
    `);
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
  
  