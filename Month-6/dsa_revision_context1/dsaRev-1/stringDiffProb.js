function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var S1 = input[0].split("");
   var S2 = input[1].trim().split("");
   var res = [];
   //console.log(S1,S2)
   for(var i = 0; i < S1.length; i++){
       if(S1[i] != S2[i]){ 
           res.push(S1[i]);
       }
   }
   console.log(res.join(""))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`ABCX
    ABCD`);
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
  
  