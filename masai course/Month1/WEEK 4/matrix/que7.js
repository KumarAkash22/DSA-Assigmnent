function runProgram(input) {
    input = input.split("\n");
   var row = input[0].trim();
   arr = [];
   for(var i = 1; i < row; i++){
       arr.push(input[i].trim().split(" ").map(Number));
   }
   var res = ""
    for(var j = 0; j < row; j++){
        for(var k = 0; k < row; k++){
                }        
        }
      
   console.log(res);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  
  