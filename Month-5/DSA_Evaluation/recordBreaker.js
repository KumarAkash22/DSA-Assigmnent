function record (N,arr){
    var highest = 0;
    var lowest = 0;
    var low = arr[0];
    var high = arr[0]
    for(var i = 1; i < N; i++){
        if(arr[i] < low){
            low = arr[i]
            highest++;
            // console.log(highest, arr[i]);
            }else if(arr[i] > high){
                high = arr[i]
                lowest++;
                // console.log(lowest ,"low",arr[i])
            }
        }
        console.log(lowest,highest)
    }
    
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        record(N,arr);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    9
    10 5 20 20 4 5 2 25 1
    `);
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
  
  