function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0].trim();
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr = arr1.sort((a,b)=>{
        return a-b;
    }) 
    var mid = (N/2);
    var ans = (arr[N-1] - arr[mid-1]);
    console.log(ans)
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    5 10 6 8`);
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
  
  