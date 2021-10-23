function digitSumArray(arr, N){
 var  ans = [];
  for (i = 0; i<N; i++){
    ans[i] = sumOfDigits(arr[i])
  }
  return ans;
}
function sumOfDigits(N){
  var sum = 0
  while(N > 0){
    sum += (N % 10);
    N = Math.floor(N/10);
  }
    return sum;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(digitSumArray(arr, N))
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
  
  