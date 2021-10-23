function runProgram(input) {
    // Write code here
   input = input.split("\n");
   var testCases = +input[0];
   var line = 1;
   for(var i = 1; i <= testCases; i++){
        var size = input[line++];
        var arr = input[line++].trim().split("").map(Number);
      // console.log(arr,size);
      sum = 0;
        for(var j = 0; j < arr.length; j++){
            sum+=arr[j];
        }
        console.log(sum);
   }  
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
  
  