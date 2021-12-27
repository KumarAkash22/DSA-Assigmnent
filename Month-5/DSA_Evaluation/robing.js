function robing(N,arr){
    if(N == 1){
        return arr[0];
    }
    if(N == 2){
        return Math.max(arr[0],arr[1]);
    }
    arr[1] = Math.max(arr[0],arr[1]);
    for(var i = 2; i < N; i++){
        arr[i] = Math.max(arr[i] + arr[i-2],arr[i-1])
    }
    
    return arr[N-1];
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(robing(N,arr));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
  
  