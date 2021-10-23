function numOfWays(N){
     if (N < 0) // Removing the case which are not possible
         return 0;
     if (N == 0) // Counting each way by adding it
        return 1
     return numOfWays(N-1) + numOfWays(N-2) + numOfWays(N-3);
     }
function runProgram(input) {
    // Write code here
    var N = +input;
    console.log(numOfWays(N))
   
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
  
  