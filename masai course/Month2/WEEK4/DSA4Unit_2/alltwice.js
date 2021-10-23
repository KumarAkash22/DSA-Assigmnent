function runProgram(input) {
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases;i++){
        var size = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
    }
    for(var i = 1; i <= size; i++){
      for(var j = 0; j < size*2-1; j++){
        if(i == arr[j]){
          count++
        }
      }
    }
    //console.log(arr,size)
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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
  
  