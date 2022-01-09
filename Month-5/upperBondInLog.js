function upper(arr,N,key,res){
    var low = 0;
    var high = N;
    while(low < high){
        var mid  = Math.floor(low + (high-low)/2);
        if(arr[mid] <= key){
            low = mid+1;
        }else{
            res = mid
            high = mid;
        }
    }
    return res;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N, key] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var res = -1;
    console.log(upper(arr,N, key,res))
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 200
    101 200 1445`);
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
  
  