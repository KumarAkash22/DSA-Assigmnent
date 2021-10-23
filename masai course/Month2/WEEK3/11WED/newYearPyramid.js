function runProgram(input) {
    // Write code here
    var sum = +input;
    var Sum = 0;
    var count = 0;
    var max = 0;
    for(var i=1;i<sum;i++){
        Sum+=i*(i+1)/2;
       // max+=Sum+i;
        if(Sum<=sum){
            count++;
        }
    }
     console.log(count);
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`20`);
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
  
  


