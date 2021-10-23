function sq(num){
    var res = num**2
    return res;
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testase = +input[0];
   var line = 1;
   for(var i = 0; i < testase; i++){
       var num = +input[line++].trim();
       console.log(sq(num));

   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    6`);
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
  
  