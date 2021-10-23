function pow(A,B){
  debugger;
    if(B == 0){
        return 1;
    }
    return  A * pow(A,B-1);; 
}
console.log(pow(2,4))
function runProgram(input) {
    // Write code here
    var [A,B] = input.split(" ").map(Number)
    console.log(pow(A,B))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2 4`);
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
  
  