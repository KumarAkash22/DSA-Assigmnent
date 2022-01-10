function financial(N, arr,res){
    res[0] = 1;
    for(var i = 1; i < N; i++){
        var count = 1;
        while((i-count) >= 0 && arr[i] >= arr[i - count]){
            count+=res[i - count];
        }
        res[i] = count;
    }
    return res.join(" ");
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase;i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        var res = new Array(N);
        // console.log(res);
        console.log(financial(N,arr,res))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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
  
  