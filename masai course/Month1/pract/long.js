function runProgram(input) {
    input = input.split("\n");
    var totalInput = +input[0];
    var line = 1;
    
    for(var i = 0; i < totalInput; i++){
        var size = +input[line];
        line++;
         var arr = input[line].trim().split(" ").map(Number);
        line ++
        console.log(size, arr);
    }
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
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
  
  