function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var N =+input[0];
    var arr =input[1].trim().split(" ").map(Number);
    var arr1 = arr.sort((a,b)=>{
        return a-b;
    })
    console.log(arr1[0])
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
  
  