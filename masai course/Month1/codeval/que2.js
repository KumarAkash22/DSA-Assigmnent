function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var price = input[0].split(" ").map(Number)
    var A = price[0];
    var B = price[1];
    var C = price[2];
    var D = price[3];
    var qunt = input[1].trim().split(" ").map(Number);
    var a = qunt[0];
    var b = qunt[1];
    var c = qunt[2];
    var d = qunt[3];
    
    var prod = A * a + B * b + C * c + D * d;
    //console.log(price, qunt);
    if(prod < 150000){
        console.log("Possible");
    }else{
        console.log("Not Possibe");
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10000 20000 15000 5000
    2 3 4 3`);
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
  
  