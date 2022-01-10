function diff(arr,N,K){
    // console.log(arr,N,K)
    for(var i = 0; i < N-1; i++){
        var res = 0
        for(var j = i+1; j < N; j++){
            res = Math.abs(arr[i] - arr[j]);
            // console.log(res)
            if(res == K){
                return "Yes";
            }
        }
    }
    return "No"
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testCase = +input[0];
   var line = 1;
   for(var i = 0; i < testCase; i++){
       var [N, K] = input[line++].trim().split(" ").map(Number);
       var arr = input[line++].trim().split(" ").map(Number);

       console.log(diff(arr,N,K))
   }

  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
  
  