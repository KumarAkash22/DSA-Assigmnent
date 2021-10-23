function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var x = input[0].split("");
    var y = input[1].trim().split("");
    
    var count = 0
    for(var i = 0; i < x.length; i++){
       for(var j = i; j < y.length; j++){
        if(x[i] == y[j]){
            break;            
        }else{
            console.log(x[i]);
            break;
        }
      }
    }
    
}
  
  if (process.env.USERNAME === "admin") {
    runProgram(`TESTCASE    
    TESOCASE`);
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
  
  