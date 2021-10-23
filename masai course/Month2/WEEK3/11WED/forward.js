function runProgram(input) {
    input = input.split("\n")
    var [size, target] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    //console.log(arr,size,target);
    var count = 0;
    for(var i =0 ;i<=size;i++){
        if(arr[i] >= arr[target-1] && arr[i] > 0){
            count++;
        }
    }console.log(count);


   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`49 29
    100 98 98 96 96 96 95 87 85 84 81 76 74 70 63 63 63 62 57 57 56 54 53 52 50 47 45 41 41 39 38 31 30 28 27 26 23 22 20 15 15 11 7 6 6 4 2 1 0`);
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
  
  
