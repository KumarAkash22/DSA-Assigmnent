function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N =  +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    for(var i = 0; i < N; i++){
        if(arr[i]%5 == 0){
            c1++;
        }else if(arr[i]%3 == 0){
            c2++;
        }else if (arr[i]%2 == 0){
            
                c3++;
            
        }else{
            c4++;
        }  
    }
   var res = c1 + " " + c2 + " " + c3+ " " + c4;
   console.log(res)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 2 3 4`);
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
  
  