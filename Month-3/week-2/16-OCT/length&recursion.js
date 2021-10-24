function strLength(str,count){
    if(str[count] == null){
        return 0;
    }
    else{
    return 1 + strLength(str,count+1);
    }
}
function runProgram(input) {
    // Write code here
    var str = input;
    var count = 0;
    console.log(strLength(str,count));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`masaischool`);
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
  
  