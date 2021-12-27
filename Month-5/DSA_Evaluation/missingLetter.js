function match(arr){
    for(var i = 0; i <= 12; i++){
        if(i!=arr[i]){
            return i;
        }
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    // var original = ["0","1","2","3","4","5","6","7","8","9","10","11","12"];
    for(var i = 0; i < testCases; i++){
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(match(arr));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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
  
  