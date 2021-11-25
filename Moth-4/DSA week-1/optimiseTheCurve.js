function eqr(A,B,C,K){
    var low = 0;
    var high = K;
    var ans = -1;
    if(K<C)
    {
        return ans
    }
    while(low <= high){
        var mid = Math.floor(low + (high - low)/2);
        
        var eq = (A*(mid*mid) + B*(mid) + C);
        
        if(eq >= K){
            // console.log(mid,eq,K)
            ans = mid;
            high = mid - 1;
        }else if(eq <= K){
            low = mid + 1;
        
        }
    }
    return ans;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var arr = input[line++].trim().split(" ").map(Number);
        var A = +arr[0];
        var B = +arr[1];
        var C = +arr[2];
        var K = +arr[3];
        console.log (eqr(A,B,C,K));
        // console.log (A,B,C,K)
    }
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 4 5 6
    2 7 6 3`);
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
  
  