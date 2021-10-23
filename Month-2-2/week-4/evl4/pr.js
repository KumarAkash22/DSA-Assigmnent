function max(arr,N,Max){
    var sum = 0;
for(var i = 0; i < N; i++){
        sum+=arr[i];  
    }
    if(sum == Max){
        return sum;
    }else if(sum > Max){
        return Max;
    }else {
        return sum;
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
   
    for(var i = 0; i < testcase; i++){
        var [N,Max] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(max(arr,N,Max));
        
        // 
    }
    
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    4 10
    1 2 3 4
    4 5
    1 2 3 4`);
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
  
  