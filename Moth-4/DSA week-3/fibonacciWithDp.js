function fibon(n,dp){
    if (n == 0 || n == 1){
      // console.log(n + "j")
       return n;
    }
    if(dp[n - 1] == "-1"){
      dp[n - 1] = fibon(n - 1,dp)
      // console.log(dp[n-1]+"dp[n-1]", dp[n-2])
    } 
    // if(dp[n - 2] == "-1"){
    //   dp[n - 2] = fibon(n - 2,dp)
    // };
    return dp[n] = dp[n-1] + dp[n - 2];
    }
  function runProgram(input) {
    var N = +input;
    var dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for(var i = 2; i < N; i++){
      dp[i] = "-1";
      
    }
    // console.log(dp);
    console.log(fibon(N,dp))
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`8`);
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
  
  