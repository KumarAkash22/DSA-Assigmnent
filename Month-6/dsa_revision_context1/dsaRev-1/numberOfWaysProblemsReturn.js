function ways(input){
var dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
for(var i = 3; i <= input; i++){
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[input]
}
function runProgram(input) {
    var input = +input;
    console.log(ways(input));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`23`);
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
  
  