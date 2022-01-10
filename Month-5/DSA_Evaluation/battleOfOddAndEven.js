function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var oddSum = 0;
    var evenSum = 0;
    for(var i = 0; i < N; i++){
        if(arr[i]%2==1){
            oddSum+=arr[i];
        }else{
            evenSum+=arr[i];
        }
    }
    // console.log(oddSum,evenSum)
    if(oddSum > evenSum){
        console.log("Odd")
    }else{
        console.log("Even");
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 2 3 4`);
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
  
  