function freq(N,arr){
    var obj = {};
    for(var  i = 0; i < N; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1;
        }else {
            obj[arr[i]]++;
        }
    }
    var max = 0;
    var maxVal = -1
    for(key in obj){
        if((obj[key] > maxVal) ){
            maxVal = obj[key];
            max = key
        }
    }
    console.log(obj);
    return max;
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var N = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(freq(N,arr));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    1 1 1 2 2
    11
    1 2 3 1 5 4 3 2 1 3 4`);
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
  
  