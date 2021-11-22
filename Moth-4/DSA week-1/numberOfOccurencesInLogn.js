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

function ubs(arr,K,N){
    var high = N;
    var low = 1;
    var ans = N;
    while(low < high){
        mid = Math.floor(low + (high - low)/2);
        if(arr[mid] <= K){
            low = mid + 1;
        }else{
            ans = mid;
            high = mid;
        }
    }
    return ans;
}
function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var upperBound = ubs(arr,K,N);
    var lowerBound = lbs(arr,K,N);
    console.log(upperBound, lowerBound);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`10 2
    2 2 2 2 2 11 15 18 20 22`);
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
  
  