function bsr(arr1,K,high,low){
    while(low <= high){
        var mid = Math.floor(low + (high-low)/2);
        if(K == arr1[mid]){
            return true;
        }else if(K < arr1[mid]){
            return bsr(arr1,K, mid-1,low)
        }else{
            return bsr(arr1,K,high,mid+1)
        }
    }
    return false
    }
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var arr1 = arr.sort((a,b)=>{
        return a-b;
    })
    var line = 2;
    var high = N-1;
    var low = 0;
    for(var i = 0; i < K; i++){
        var key = +input[line++].trim()  
        var res = bsr(arr1,key,high,low);
        if(res == true){
            console.log("YES");
        }else{
            console.log("NO")
        }
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
  
  