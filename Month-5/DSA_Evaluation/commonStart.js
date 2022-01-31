function match(s1,s2,s3){
    // console.log(s3)
    var res = "";
    for(var i = 0; i <s1.length; i++){
        if(s1[i] == s2[i] && s2[i] == s3[i]){
            res = s2+""
        }
    }
    if(res.length > 0){
        console.log(res);
    }else{
        console.log("None")
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var line = 1;
    for(var i = 0; i < N; i++){
        var arr = input[line++].trim().split(" ");
    }
    var s1 = arr[0];
    var s2 = arr [1];
    var s3 = arr[2];
    match(s1,s2,s3)
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    rrrb rrby rryb`);
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
  
  