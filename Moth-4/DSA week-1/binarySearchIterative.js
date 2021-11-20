function bsi(arr,K,N){
for(var i = 0; i < N; i++){
    if(arr[i] == K){
        return true;
    }
  }
  return false;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
   var res = bsi(arr,K,N);
   if(true == res){
       console.log("1");
   }else{
       console.log("-1")
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 0
    2 -2 5 3 4`);
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
  
  