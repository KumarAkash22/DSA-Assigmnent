function runProgram(input) {
    // Write code here
    var input = +input;
    var sum = 0;
    var count = 0;
    var max = 0
    for(var i = 1; i < input; i++){
        sum = i * (i + 1)/2;
        //max+=sum+i
        if(sum <= input){
            count++;
            console.log(count);
        }
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`24`);
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
  
  