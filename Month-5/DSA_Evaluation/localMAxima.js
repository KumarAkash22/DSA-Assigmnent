function maxima(N,arr){
    if(N <= 2){
        return -1;
    }else{
        var count = 0;
        for(var i = 1; i < N-1; i++){
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                count++;
            }
        }
    }
    return count;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(maxima(N,arr));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    2
    1 2
    10
    884 729 768 201 266 494 597 328 705 287`);
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
  
  