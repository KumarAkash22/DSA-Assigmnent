function runProgram(input) {
    // Write code here
    var num = +input;
    sum = 0;
    for(var i = 2; i <= num; i+=2){
        sum+=i
    }
    console.log(sum);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5`);
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
  
  