function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    
    for(var i = 1; i <= testCases; i++){
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 1; j <= size; j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
    
    var res = "";
    var res1 = "";
    var res2 = "";
    var res3 = ""; 
    for(var l = size - 1; l >= 0; l--){
        for(var m = 0; m < 1; m++){
            res+=arr[l][m]+" ";
        }
    }
    for(var a = 0; a < 1; a++){
        for(var b = 1; b <= size - 1; b++){
            res1+=arr[a][b]+" ";
        }
    }
    for(var l = 1; l < size; l++){
        for(var m = size -1; m < size; m++){
            res2+=arr[l][m]+" ";
        }
    }
    for(var a = size - 1; a < size ; a++){
        for(var b = size - 2; b >= 1; b--){
            res3+=arr[a][b]+" ";
        }
    }
    console.log(res+res1+res2+res3)
  }
}
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    1
    13`);
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
  
  