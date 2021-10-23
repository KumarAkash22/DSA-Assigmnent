function str(res,total){
    if(res[0]%2 == 1 && res[res.length-2]% 2 == 0){ 
      total++; 
    }   
       return total;   
}
function runProgram(input) {
    input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    var total = 0;
    var sum = 0; 
    for(var i = 0; i < testCase; i++){
        var size = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
    }
    
    for(var j = 0; j < size; j++){
        for(var k = j; k < size; k++){
            var res = "";
            for(var l = j; l <= k; l++){
                res= res + arr[l]+" "
            }
            var add = str(res,total);
            if(add == 1){
                sum++;
            } 
            console.log(res.trim(),sum)
        }   
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    1 2 3 4 5`);
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
  
  