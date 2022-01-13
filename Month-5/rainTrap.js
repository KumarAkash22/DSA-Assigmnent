function rainTrap(arr,N){
    var result = 0;
    var left = 0;
    var right = 0;
    var low = 0;
    var high = N-1;
    while(low <= high){
        if(arr[low] < arr[high]){
            if(arr[low] > left){
                left = arr[low];
            }else{
                result+=left - arr[low];  
            }
            low++;
        }else{
            if(arr[high] > right){
                right = arr[high];
            }else{
                result+=right - arr[high];
                high--;
            }
            
        }
    }
    return result; 
}
function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var testCases = +input[0];
   var line = 1;
   for(var i = 0; i < testCases ; i++){
       var N = +input[line++].trim();
       var arr  = input[line++].trim().split(" ").map(Number);
       console.log(rainTrap(arr,N));
   } 
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    3 2 0 4 6
    7
    7 0 3 6 2 3 5`);
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
  
  