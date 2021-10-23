function longestSubarray(arr,k){
  left = -1
  right = 0
  sum = 0;
  for (i = 0;i<arr.length;i++){
    if (arr[i] % k != 0){
      
      if (left == -1){
        left = i;     
        }else {
        right = i;
      }
    }
    sum += arr[i];
  }
  //console.log(sum,left,right)
    if (sum % k != 0){
      return 1;
    } 
    if (left == -1){ 
      return 0;
    }
    left = left + 1;
    right = arr.length - right;
    console.log(sum,left,right)
    var max_window_size = arr.length - Math.min(left,right)
    return max_window_size;
  }
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [n,k] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    console.log(longestSubarray(arr,k));
     
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4 3
    2 3 4 6`);
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
  
  