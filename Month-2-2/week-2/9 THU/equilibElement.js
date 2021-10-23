function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var left = 0;
    var right = N-1;
    for(var i = 1; i < N; i++){
        left = arr[i - 1];
        console.log(left+",")

    }
    
    for(var j = N-2; j >= 0; j--){
        right[j] = right[j+1] + left[j+1];
        console.log(right+",")
    }
    for(var k = 0; k < N; k++){
        if(left[i] == right[i]){
            console.log(i+1);
        }else{
            console.log("-1");
        }
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    3 3 5 5 1`);
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
  
  