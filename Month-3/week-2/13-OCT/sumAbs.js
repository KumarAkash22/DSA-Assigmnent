function absSum(N,arr,left,sum){
    if(left == N-1){
        return sum;
    }
    sum+= Math.abs(arr[left] - arr[left+1]);
    return  absSum(N,arr,left+1,sum);
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    var left = 0;
    var sum = 0; 
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(absSum(N,arr,left,sum))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
  
  