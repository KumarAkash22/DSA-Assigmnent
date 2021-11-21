var ans = -1;
function bsr(arr,K,low,high){
  while (low < high){
    mid = Math.floor(low + (high - low)/2);
    if (arr[mid] <= K){
      low = mid + 1; 
    }else{
      ans = mid
      high = mid;
    }
  }
  return ans
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var low = 1;
    var high = N;
    console.log(bsr(arr,K,low,high));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`7 7
    2 2 2 2 2 7 11`);
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
  
  