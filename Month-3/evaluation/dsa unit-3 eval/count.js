function cou(arr){
    var obj = {};
    for(var i = 0; i < 9; i++){
        if(obj[i] == null){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
        console.log(obj)
    }
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split("").map(Number);
        cou(arr)
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    21321
    6
    235452`);
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
  
  