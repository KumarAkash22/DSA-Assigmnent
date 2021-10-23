function fact(num){
    if(num == 1){
        return 0;
    }
    return Math.log(num) + fact(num-1);

}

function runProgram(input) {
    // Write code here
    var num = +input;
    var res = fact(num);
    console.log(Number.parseFloat(res).toFixed(4))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3`);
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
  
  