function runProgram(input) {
    input = input.split("\n")
    var testCases = +input[0];

    for(var i = 1; i <= testCases; i++){
        var arr = input[i].trim();
        var res = "";
    for(var j = 0; j < arr.length; j++){
        if(arr[j] != arr[j+1]){
            res+=arr[j];
        }
    }     
        console.log(res)
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    abb
    aaab
    ababa`);
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
  
  