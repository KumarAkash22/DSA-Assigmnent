function buggy(curr,update){
    if(curr[0] <= update[0]){
         if(curr[1] <= update[1]){
             if(curr[2] <= update[2]){
                return "True"
             }
       
    }
}
return "False"

    
}
function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var N = +input[0];
    var line = 1;
    for(var i = 0; i < N; i++){
        var curr = input[line++].trim().split(".").map(Number);
        var update = input[line++].trim().split(".").map(Number);
        
        console.log(buggy(curr,update))
    } 
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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
  
  