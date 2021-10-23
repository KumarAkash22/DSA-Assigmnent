function match(arr1,arr2,N){
    var left = 0;
    var right = N-1;
    var count = 0;
    
        while(left < N && right >= 0){
            if(arr1[left] == arr2[right]){
                count++;
                left++;
                right--;
            }else if(arr1[left] > arr2[right]){
                right--;
            }else{
                left++;
            }
            
        }
        console.log(count)
    
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
   
    for(var i = 0; i < testCases; i++){
        var N = +input[line++].trim();
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);
        
         match(arr1,arr2,N)
        
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
  
  