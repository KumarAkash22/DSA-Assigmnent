function sprial(arr,size){
    var top = 0;
    var bottom = size - 1;
    var left = 0;
    var right = size-1;
    var res = "";
    var count = 0;
    while(count <= size*size){
        for(var i = top; i <= bottom; i++){
            res+=arr[i][left]+" ";
            count++
        }
        left++;
        
        for(var j = left; j <= right; j++){
            res+=arr[bottom][j]+" ";
            count++;
        }
        bottom--;
        
        for(var k = bottom; k >= top; k--){
            res+=arr[k][right]+" ";
            count++;
        }
        right--;
        for(var l = right; l >=left; l--){
            res+=arr[top][l]+" ";
            count++;
        }
        top++;
        
        
    }
    return res;
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    
    for(var i = 0; i < testCase; i++){
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        console.log(sprial(arr,size));
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
  
  