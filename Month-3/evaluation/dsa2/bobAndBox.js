function numOfWays(N){
    if (N < 0) 
        return 0;
    if (N == 0) 
       return 1
    return numOfWays(N-1) + numOfWays(N-3) + numOfWays(N-5);
    }
function runProgram(input) {
   // Write code here
   var N = +input;
   console.log(numOfWays(N))
  
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
 
 