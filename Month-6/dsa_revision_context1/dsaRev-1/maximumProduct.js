function maxProd(arr,N){
    var maxProduct = 1;
    var maxCurr = arr[0];
    for (var i = 0; i < N; i++) {
         maxProduct*= arr[i] ;
        maxCurr = Math.max(maxProduct, maxCurr);
        // console.log(maxCurr,"maxCurr");
        // console.log(maxProduct,"maxProduct")
    }
    
    return maxCurr;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(maxProd(arr,N))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3
    -3 0 -2
    5
    5 -4 2 5 8`);
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
  
  