function exceptOne(N, arr){
    var res = arr[0];
    for(var i = 1; i < N; i++){
        res = res ^ arr[i];
    }
    return res;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(exceptOne(N,arr))
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
  
  