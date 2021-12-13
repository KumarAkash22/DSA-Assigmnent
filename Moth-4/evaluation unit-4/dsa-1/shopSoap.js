function searchTarget(arr,K){
  var low = 0;
  var high = arr.length-1;
  while(low < high){
    var mid = Math.floor(low + (high - low)/2);
    // console.log(mid)
    if(arr[mid] < K){
        low = mid + 1;  
    }else if(arr[mid] > K){
        high = mid - 1;
        // return low
    }
  }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr = arr1.sort((a,b)=>{
        return a - b
    })
    console.log(arr)
    var que = +input[2].trim();
    var line = 3;
    for(var i = 0; i < que; i++){
        var K = +input[line++].trim();
        console.log (searchTarget(arr,K))
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    1 4 10 5 6
    2
    5
    11`);
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
  
  