function sprial(arr,n){
  var top = 0;
  var left = 0;
  var right = n-1;
  var bottom = n-1;
  for(var j = 0; j < n/2; j++){
    var prev = arr[top+1][left];
      for(var i = left; i <= right; i++){
          var temp = arr[top][i];
          arr[top][i] = prev;
          prev = temp;
      }
      top++;
      for(var i = top; i <= bottom; i++){
        var temp = arr[i][right];
        arr[i][right] = prev;
        prev = temp;
      }
      right--;
      for(var i = right; i >= left; i--){
        var temp = arr[bottom][i];
        arr[bottom][i] = prev;
        prev = temp;
      }
      bottom--;
      for(var i = bottom; i >= top; i--){
        var temp = arr[i][left];
        arr[i][left] = prev;
        prev = temp;
      }
      left++;
  }
  return arr;
}
function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var size = +input[0];
    var arr = [];
    for(var i = 1; i <= size; i++){
        arr.push(input[i].trim().split(" ").map(Number));
    }
    var res = (sprial(arr,size)); 
    
    var a = "";
        for(var k = 0; k < size; k++){
            for(var l = 0; l < size; l++){
                a+=res[k][l]+" ";
            }
            console.log(a);
            a = "";
        }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
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
  
  