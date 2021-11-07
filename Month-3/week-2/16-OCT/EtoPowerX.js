function factorial(r){
    if (r == 1 || r == 0){
        return 1;
    }
    return r * factorial(r-1);
}
function etpx(n,r){
    if(r == 0){
        return 1;
    }
    var val = Math.pow(n,r);
    ans = val/factorial(r) + etpx(n,r-1);
    return ans;

}
function runProgram(input) {
    // Write code here
    var [n,r] = input.split(" ").map(Number);
    var result = etpx(n,r)
    console.log(Number.parseFloat(result).toFixed(4));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 2`);
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
  
  