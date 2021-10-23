function smallNeighbour(N,arr){
    var stack = [];
    var ans = [];
    for(var i = 0; i < N; i++){
        if(stack.length == 0){
            ans.push(-1)
        }
        if(stack.length > 0 && stack[stack.length-1]<arr[i]){
            ans.push(stack[stack.length-1])
        }
        if(stack.length > 0 && stack[stack.length-1] >= arr[i]){
            while(stack[stack.length-1] >= arr[i]){
                stack.pop()
            }if(stack.length == 0){
                ans.push(-1);
            }else{
                ans.push(stack[stack.length-1])
            }
        }
        stack.push(arr[i])
    }
    console.log(ans.join(" "));
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    smallNeighbour(N,arr)
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
  
  