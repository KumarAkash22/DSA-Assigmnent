function fibon(n){
  if (n == 0){
      return 0;
  }
  if (n == 1){
      return 1;
  }
  return fibon(n - 1) + fibon(n - 2)
  }
function runProgram(input) {
  var N = +input;
  console.log(fibon(N))
 
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

