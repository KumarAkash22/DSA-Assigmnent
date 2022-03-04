function element(arr,N){
  for(var i = 1; i < N-1; i++){
     let leftFlag = false;
     let rightFlag = false;
     for(var j = i-1; j >= 0; j--){
       if(arr[i] < arr[j]){
         leftFlag = true;
       }
     }
     if(leftFlag == false){
       for(var k = i + 1; k < N; k++){
         if(arr[i] > arr[k]){
           rightFlag = true;
         }
       }
     }
     if(leftFlag == false && rightFlag == false){
       return arr[i]
     }
  }

  return -1
}
function runProgram(input) {
    // Write code here
   var input = input.split('\n');
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number); 
   console.log(element(arr,N)); 
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    4 3 6 7 8`);
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
  
  