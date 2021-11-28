function ubs(arr,K,N){
  var high = N;
  var low = 1;
  
  while(low < high){
      mid = Math.floor(low + (high - low)/2);
      if(arr[mid] <= K){
          low = mid + 1;
      }else{
          high = mid;
      }
  }
  return high;
}
function lbs(arr,K,N){
  var high = N - 1;
  var low = 0;
  var ans = -1;
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
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var key = +input[2].trim();
    var upper = ubs(arr,key,N);
    var lower = lbs(arr,key,N);
    var freq = upper - lower;
    console.log(lower + " "+ (upper-1) + " "+ freq);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6
    1 1 1 2 2 2	
    1`);
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
  
  