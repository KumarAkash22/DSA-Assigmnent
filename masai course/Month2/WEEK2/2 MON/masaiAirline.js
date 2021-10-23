function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    for(var i = 0; i < testCases; i++){
      if(arr1[i] <= 15 && arr2[i] <= 7){
        console.log("Bording");
      }else{
        console.log("Stop");
      }
    }
     
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
  
  