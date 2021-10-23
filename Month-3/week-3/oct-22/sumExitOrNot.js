function achive(N,arr,target){
  if(target==0){
    return true;
  }
  if(N == 0){
    return false
  }
  if(arr[N-1] > target){
    return achive(N-1,arr,target);
  }
  return achive(N-1,arr,target) || achive(N-1,arr,target - arr[N-1]);
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var target = +input[2].trim();
    if((achive(N,arr,target))){
      console.log("yes");
    }else{
      console.log("no")
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
  
  