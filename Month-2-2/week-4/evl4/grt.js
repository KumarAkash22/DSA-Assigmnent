function next(N, arr){
    var stack = [];
    var ans = [];
    for(var i = N-1; i >= 0; i--){
        if(stack.length == 0){
            ans.push(-1);
        }else if( stack.length > 0 && stack[stack.length-1] > arr[i]){
            ans.push(stack[stack.length-1]);
        }else if(stack.length > 0 && stack[stack.length-1]<= arr[i]){
            while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
                stack.pop()
            }if(stack.length==0){
                ans.push(-1)
            }else{
                ans.push(stack[stack.length-1]);
            }
        }
        stack.push(arr[i]);

    }
    return(ans.reverse().join(" "))
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for(var i = 0; i < testcase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(next(N,arr));
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    5 4 1 3 2`);
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
  
  