function runProgram(input) {
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1
    for(var i = 0; i < testCases; i++){
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        //console.log(arr,size);
        var sum = 0;
        var store = ""
        for(var j = 0; j < size; j++){
            sum+=arr[j];
            store+= sum + " ";
            
        }
        console.log(store);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    1 2 3 4 5`);
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
  
  