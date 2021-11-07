function call(current,target){
    if(target == current){
        return true;
    }
    
    if(current < target){
        return false;
    }
    if(call(current*10,target)== true || call(current*20,target)==true){
        return true
    }
    
    else{
        return false
    }
   
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var line = 1;
    for(var i = 0; i < N; i++){
        current = +input[line++];
// console.log(current)
        var result = (call(current,1));
        if(result == true){
            console.log("Yes");
        }else{
            console.log("No")
        }
    } 
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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
  
  