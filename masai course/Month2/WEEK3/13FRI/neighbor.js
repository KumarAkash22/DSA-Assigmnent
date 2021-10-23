function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0
    if(arr[0] > arr [1]){
        count++;
    } if(arr[size-1] > arr[size-2]){
        count++;
    }
    for(var i  = 0; i < size; i++){
       
         if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            count++
        }
        
    } 
    console.log(count);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6
    8 0 -2 1 -4 6`);
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
  
  