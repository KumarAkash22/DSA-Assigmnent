function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    for(var i = 0; i < N; i++){
        if(arr[i] == "0"){
            count1++;
        }else if(arr[i] == "1"){
            count2++;
        }else{
            count3++
        }
    }
   console.log(count1+" "+count2+" "+count3);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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
  
  