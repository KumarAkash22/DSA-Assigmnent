function runProgram(input) {
    // Write code here
    input= input.split("\n");
    var total = +input[0];
    var arr = input[1].trim().split("");
    for(var i = 0; i < arr.length; i++){
        
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    aman`);
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
  
  