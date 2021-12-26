function coinchange(arr , target , n, dp) {
    
    if (target == 0){
        return dp[n][target] = 1;
    }
    if (n == 0){
        return 0;
    }
    if (dp[n][target] != -1){
        return dp[n][target];
    }
    if (target >= arr[n-1]) {        
        return dp[n][target] = coinchange(arr, target - arr[n - 1], n, dp) + coinchange(arr, target, n - 1, dp);
        //coinChange (arr,4-3,4,dp)+(arr, 4, 3, dp)
    } else{
         return dp[n][target] = coinchange(arr, target, n - 1, dp);
     }
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [target, n] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var dp = Array(n+1).fill().map(() => Array(target+1).fill(-1));
    // console.log(dp)
console.log(coinchange(arr,target,n,dp))    
console.log(dp)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`8 5
    3 5 7 8 10`);
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
  
  