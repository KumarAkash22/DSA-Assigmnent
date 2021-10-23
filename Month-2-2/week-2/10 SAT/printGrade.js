function runProgram(input) {
    // Write code here
    var total = +input;
    if(total == 100){
        console.log("A");
    }else if(total >= 90){
        console.log("B");
    }else if(total >=80){
        console.log("C");
    }else{
        console.log("F");
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`80`);
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
  
  