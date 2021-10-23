function reverse(arr, left, right){
    
    while(left < right){
        var tem = arr[left];
        arr[left] = arr[right];
        arr[right] = tem;
        left++;
        right--;

    }
    return arr;
}

function runProgram(input) {
    
   var input = input.split("\n");
   var testCases = +input[0];
   var line = 1;
   for(var i = 0; i < testCases; i++){
       var [N,K] = input[line++].trim().split(" ").map(Number);
       var arr = input[line++].trim().split(" ").map(Number);
       K = K%N
       
       reverse(arr,0,N-1);
       reverse(arr, 0, K-1);
       reverse(arr,K,N-1);
       console.log(arr.join(" "));
       
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
  
  