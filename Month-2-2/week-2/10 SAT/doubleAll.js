function runProgram(input) {
    var input = input.split(" ").map(Number);
    var one = input[0];
    var two = input[1];
    var three = input[2];
    var four = input[3];
    var five = input[4];
    
    var result = (one + two + three + four + five) * 2;
    console.log(result); 
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(``);
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
  
  