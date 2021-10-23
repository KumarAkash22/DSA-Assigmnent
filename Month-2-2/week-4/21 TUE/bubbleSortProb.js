function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    for(var i = 0; i < size-1; i++){ 
        for(var j = 0; j < size-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }  
        } 
    }
    console.log(arr.join(" "))
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    3 5 0 9 8`);
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
  
  