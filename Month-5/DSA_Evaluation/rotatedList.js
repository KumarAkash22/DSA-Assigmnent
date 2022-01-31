function rotated(N,arr){
   arr1 = arr.sort((a,b)=>{
       return a-b;
   })
   return arr[N-1]
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n")
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   console.log(rotated(N,arr));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    6 7 8 1 4`);
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
  
  