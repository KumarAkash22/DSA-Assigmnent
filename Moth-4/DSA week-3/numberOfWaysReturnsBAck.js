//Enter code here
function numOfWays(N,dp){
    if (N < 0) // Removing the case which are not possible
        return 0;
    if (N == 0) // Counting each way by adding it
       return 1;
       if(dp[N] == "-1"){
    dp[N] = numOfWays(N-1,dp) + numOfWays(N-3,dp) + numOfWays(N-4,dp);
       }
   
    }
function runProgram(input) {
   // Write code here
   var N = +input;
   var dp = [];
   for(var i = 0; i < N; i++){
    dp[i] = "-1";
    
  }
   console.log(numOfWays(N, dp))
  
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
 
 