function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr = arr1.sort((a,b)=>{
        return a-b;
    })
    var sum = 0;
    for(var i = 0; i < N; i++){
        sum+=arr[i]*i;
    }
    console.log(sum);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    2 5 1 6`);
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
  
  