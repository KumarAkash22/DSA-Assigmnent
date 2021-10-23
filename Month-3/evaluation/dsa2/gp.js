function gp(pow,R){
    if(pow == 0){
      return 1;
    }
      return (1/R**pow) + gp(pow-1,R)
          
}
function runProgram(input) {
    // Write code here
    var [pow,R] = input.split(" ").map(Number);
   var res = (gp(pow,R));
   res = Number.parseFloat(res).toFixed(4);
   console.log(res) 
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 5`);
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
  
  