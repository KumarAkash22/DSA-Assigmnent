function runProgram(input) {
    // Write code here
    input = input.split(" ").map(Number);
    var a = input[0];
    var b = input[1];
    var c = input[2];
    if((a < b) && (a > c)){
        console.log(a);
    }else if ((b < a) && (b > c)){
        console.log(b);
    }else{
        console.log(c); 
    }
      
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6 7 6`);
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
  
  
