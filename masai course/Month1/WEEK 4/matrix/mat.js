function runProgram(input) {
    input =input.split("\n")
    var dim = input[0].trim().split(" ").map(Number);
     var row = +dim[0];
     var col = +dim[1];
     var arr = [];
     for(var i = 1; i <= row; i++){
       arr.push(input[i].trim().split(" ").map(Number));
     
     }
    //  
    var res = "";
    for(var j = 0; j < col; j++){
      for(var k = row-1; k >= 0; k--){
        res+=arr[k][j]+" ";
        
      }
    }
    console.log(res);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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
  
  