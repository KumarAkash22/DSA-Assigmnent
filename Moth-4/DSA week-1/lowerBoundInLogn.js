var ans = -1;
function bsr(arr,K,low,high){
  while (low <= high){
    mid =Math.floor(low + (high - low)/2);
    if (arr[mid] == K){
      ans = mid
      high = mid - 1
    }else if (arr[mid] > K){
      high = mid - 1 
    }else{ 
      low = mid + 1 
    }
  }
  return ans
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var low = 0;
    var high = N - 1;
    console.log(bsr(arr,K,low,high));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10 7
    0 2 4 4 5 5 7 7 9 10`);
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
  
  