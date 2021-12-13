function jump (n,dp){
    if(dp[n] != -1){
        // console.log(dp)
        return dp[n];
    }
    // console.log("dp"+dp)
    dp[n] = jump(n-1, dp) + jump(n-2,dp);
    return dp[n]
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var dp = [];
    dp[0] = 1;
    for(var i = 1; i < n; i++){
        dp[i] = -1
    }
    
    console.log(jump(dp,n))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    10 30 40 20`);
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
  
  