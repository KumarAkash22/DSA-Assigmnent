function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var items = input[1].trim().split(" ").map(Number);
    var price = [550, 240, 84, 159, 80, 160, 252];
    var subprice = 0;
    for(var i = 0; i < 7; i++){
         subprice+= items[i] * price[i];
        // console.log(items[i],price[i])
    }
    console.log(subprice*N);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    0 1 1 1 0 0 1`);
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
  
  