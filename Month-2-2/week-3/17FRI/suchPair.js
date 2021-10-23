function check(N,target,arr){
  var count = 0;
  var left = 0;
  var right = N-1;
  
  //console.log(arr)
while(left < right){
  var sum = 0;
   sum+=arr[left] + arr[right];
  //console.log(sum, left,right);
  if(sum == target){
    return "1";
  }else if(sum < target){
    left++
  }else{
    right--;
  }   
  
}
return "-1"
 }
function runProgram(input) {
    
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    
    for(var i = 1; i <= testcase; i++){
        var [N , target] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);

        var arr1 = arr.sort(function (a, b){
          return a-b;
        });
        //console.log(arr1)
       console.log(check(N, target, arr1));
}
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5 2
    3 4 0 10 17`);
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
  
  