function sprial(arr,n){
    var top = 0;
    var left = 0;
    var right = n-1;
    var bottom = n-1;
    var count = 0;
    var size = n*n;
    var out = "";
    while(count < size){
        for(var i = left; i <= right; i++){
            out+=arr[top][i]+ " ";
            count++;
        }
        top++;
        for(var i = top; i <= bottom; i++){
            out+=arr[i][right]+" ";
            count++;
        }
        right--;
        for(var i = right; i >= left; i--){
            out+=arr[bottom][i]+" ";
            count++;
        }
        bottom--;
        for(var i = bottom; i >= top; i--){
            out+=arr[i][left]+" ";
            count++;
        }
        left++;
    }
    return out;
}
function runProgram(input) {
    // Write code here
   input = input.split("\n");
   var n = +input[0];
   var arr = [];
   for(var i = 1; i <= n; i++){
       arr.push(input[i].trim().split(" ").map(Number));
   }
   //console.log(arr);
   console.log(sprial(arr,n));
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  
  