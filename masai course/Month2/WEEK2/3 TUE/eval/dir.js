function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1
    for(var i = 0; i < testCases; i++){
        var size = +input[line++].trim();
        var arr = input[line++].trim().split("");
        res = 0;
        for(var j = 0; j < size; j++){
            if(arr[j] == "L"){
                res+= -1;
                
            }
            if(arr[j] == "R"){
                res+= +1;
            }
            if(arr[j] == "U"){
                res+= +1;
            }
            if(arr[j] == "D"){
                res+= -1;
            }
        }
        if(res == 0){
            console.log("Yes")
        }else{
            console.log("No");
        }
        
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    5
    RLRUD
    4
    LRUD
    4
    LUDR`);
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