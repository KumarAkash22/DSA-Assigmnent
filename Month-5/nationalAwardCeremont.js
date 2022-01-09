function rank (N,arr){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    var str = ""
    for(key in obj){
        for(var i = 0; i < obj[key]; i++){
            str+=key+" ";
        }
    }
    console.log(str);
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcases = +input[0].trim();
    var line = 1;
    for(var i = 0; i < testcases; i++){
        var N = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        rank(N,arr);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
  
  