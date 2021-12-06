function cto(n,arr){
    for(var i = 0; i < n; i++){
        if(arr[i] == "1"){
            return i;
        }
    }
    return "-1"
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    console.log(cto(n,arr));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    0 0 0 0 0`);
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
  
  