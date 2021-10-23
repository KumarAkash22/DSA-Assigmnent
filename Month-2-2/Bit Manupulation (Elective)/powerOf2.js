function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    for(var i = 1; i <= testCases; i++){
        var arr = +input[i].trim();
        var res = 0;
        var j = 0;
            while(res < arr){
                res = Math.pow(2, j);
                
                j++;
            }
        
        if(res == arr){
            console.log("YES");
        }else{
            console.log("NO")
           }  
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    1
    2
    100`);
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
  
  