function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    for(var i = 1; i <= testCases; i++){
        var arr = +input[i].trim();
        
        while(arr>1){
            
            arr=arr/2;
        }
        if(arr == 1){
            console.log("True");
        }else{
            console.log("False");
        }
    // console.log(rem)
     }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    32
    3`);
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
  
  