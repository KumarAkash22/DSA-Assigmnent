function twoSum(array,k){
  left = 0
  right = array.length - 1
  
  while(left < right){
    sum = array[left] + array[right];
    if (sum == k){
      return left+ " " +right; 
     
     
    } else if (sum > k) {
      right--;
    } else{
      left++;
    }
    } 
       return -1 + " " +-1; 
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var [size, target] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(twoSum(arr,target))
        
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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
  
  
