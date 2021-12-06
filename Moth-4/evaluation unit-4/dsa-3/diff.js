function diff(N,dp){
    if(dp[N] != -1){
        return dp[N];
    }
    dp[N] = diff(N-1,dp) + diff(N-3, dp) + diff(N-4,dp); 
    return dp[N];
}
function runProgram(input) {
    // Write code here 
    var N = +input;
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;
    for(var i = 4; i <= N; i++){
         dp[i] = -1
    }
    console.log(diff(N,dp))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`45`);
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
  
  