function greater(N,arr,K){
  var max = -1;
  
  for(var i = 0; i < N-1; i++){
    var sum = 0;
     
    for(var j = i+1; j < N; j++){
      sum = arr[i] + arr[j];
     // console.log(arr[i],arr[j])
      if(max < sum && sum < K){
        max = sum;
        
      } 
    }
  }
  return max
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for(var i = 0; i < testcase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        var K = +input[line++].trim();
        
        arr.sort() 
        //console.log(arr)
        console.log(greater( N, arr,K));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    6
    1 7 6 4 8 4
    7
    1
    2
    3
    6
    5 3 8 2 1 9
    5`);
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
  
  