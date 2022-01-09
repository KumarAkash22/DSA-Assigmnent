function numOfWays(N){
  var dp = [];
   dp[0] = 1;
   dp[1] = 1;
   dp[2] = 1;
   dp[3] = 2;
   for(var i = 4; i <= N; i++){
    dp[i] = dp[i-1] + dp[i-3]+ dp[i-4];
  }
  return dp[N]
}

//Enter code here
// function numOfWays(N,dp){
//     if (N < 0){ // Removing the case which are not possible
//         return 0;
//     }
//     if(N == 0 || N == 1 || N == 2 ){
//       return 1;
//     }
//     if (dp[N] != -1){ // Counting each way by adding it
//        dp[N] = numOfWays(N-1, dp)
//     }
//     dp[N] = numOfWays(N-1,dp) + numOfWays(N-3,dp) + numOfWays(N-4,dp);
    
//     return dp[N];
//     }
function runProgram(input) {
   // Write code here
   var N = +input;
   console.log(numOfWays(N));
  
 }
 if (process.env.USERNAME === "admin") {
   runProgram(`42`);
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
 
 