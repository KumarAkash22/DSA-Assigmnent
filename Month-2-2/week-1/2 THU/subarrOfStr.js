function runProgram(input) {
    // Write code here
    var str = input.split("")
    for(var i = 0; i < str.length; i++){
        var res = "";
        for(var j = i; j < str.length; j++){
            res+=str[j];
            console.log(res);
        } 
        
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`Akash`);
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
  
  


