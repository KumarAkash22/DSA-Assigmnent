function runProgram(input) {
    // Write code here
    var input = input.split(" ").map(Number);
    var Australia = input[0];
    var England = input[1];
    if(Australia > England){
        console.log("Australia");
    }else if(England > Australia){
        console.log("England");
    }else{
        console.log("Tie");
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(``);
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
  
  