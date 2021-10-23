 function check(arr, N){
 
   for(var i = 0; i < 2*N-1; i++){
      var min = i;
      for(var j = i+1; j < 2*N;j++){
    if(arr[min] < arr [j]){
       min = j;
      }
    }
    [arr[min],arr[i]] = [arr[i],arr[min]];
    
  }
  return(arr);
}

function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var sum = 0;
    var arr1 = check(arr,N);
    console.log(arr1)
   for(var i = 0; i < N; i++){
    sum+=arr1[i];
   } 
   console.log(sum)
  } 
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    1 3 1 2 4 4 7 9 2 4`);
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
  
  