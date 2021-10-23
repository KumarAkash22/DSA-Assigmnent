function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var size = +input[line++].trim();
        var arr = input[line++].trim().split("");
        //console.log(size,arr);
        var res = "";
        for(var a = 0; a < arr.length; a++){
            for(var b = a; b < arr.length;b++){
                res+=arr[b];
                console.log(res);
            }
            res = "";
        }
        
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    4 
    aman`);
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
  
  