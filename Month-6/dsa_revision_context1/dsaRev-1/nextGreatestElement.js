function next(arr,N){
    var stack = [];
    var res = [];
    for(var i = N-1; i >= 0; i--){
        while(arr[i] >= stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length == 0){
            stack.push(arr[i]);
            res[i]= -1;
        }
        if(arr[i] < stack[stack.length-1]){
            res[i] = stack[stack.length-1];
            stack.push(arr[i]);
        }
    }
    console.log(res.join(" "))
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testCase = +input[0];
   var line = 1;
   for(var i = 0; i < testCase ; i++){
       var N = +input[line++].trim();
       var arr = input[line++].trim().split(" ").map(Number);
       next(arr,N)
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4
    1 3 2 4`);
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
  
  