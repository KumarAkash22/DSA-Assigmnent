function wayOfZero(arr){
    if(arr < 0){
        return 0;
    }
    if(arr == 0){
        return 1;
    }
    return wayOfZero(arr-1) + wayOfZero(arr-2) + wayOfZero(arr-5)
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase;i++){
         var arr = +input[line++]
         console.log(wayOfZero(arr))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4`);
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
  
  