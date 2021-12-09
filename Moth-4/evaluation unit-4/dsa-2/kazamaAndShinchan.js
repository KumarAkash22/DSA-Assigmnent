function bs(N,arr,K){
    var low = 0;
    var high = N-1;
    var ans = -1
    while(low <= high){
        mid = Math.floor(low + (high-low)/2);
        if(arr[mid] == K){
            return mid;
        }else if(arr[mid] > K){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        } 
    }
    return ans;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var K = +input[2].trim();
    console.log(bs(N,arr,K));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 3 5 6
    2 `);
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
  
  