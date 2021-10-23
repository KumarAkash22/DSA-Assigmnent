function spiral(arr,size){
    var top = 0;
    var bottom = size - 1;
    var left = 0;
    var right = size - 1;
    var res = "";
    
    for(var i = bottom; i > top; i--){
        res+=arr[i][bottom]+" ";   
    }

    
    for(var j = right; j > left; j--){
        res+=arr[top][j]+" "
    }
    
    for(var k = 0; k < bottom; k++){
        res+= arr[k][top] + " ";
    }

    for (var l = 0; l < right; l++){
        res+= arr[bottom][l] + " ";
    }
    for(var m = right-1; m > top; m--){
        res+=arr[m][bottom-1]+" ";
    }
    console.log(res)
}
function runProgram(input) {
    input = input.split("\n");
    var line = 1;
    var testCases = +input[0];
    for(var i = 0; i < testCases; i++){
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        spiral(arr,size);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    3 
    1 2 3
    4 5 6
    7 8 9`);
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
  
  