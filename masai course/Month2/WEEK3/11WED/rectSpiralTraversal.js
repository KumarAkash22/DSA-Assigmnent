function spiral(arr, row, col){
    top = 0;
    bottom = row-1;
    left = 0;
    right = col-1;
    var size = row*col;
    count = 0;
    var res = "";
    while(count < size){
    for(var i = top; i <= bottom; i++){
        res+=(arr[i][left])+" ";
        count++
        }
        left++;
        
    if(count < size){
    for(var j = left; j <= right; j++){
        res+=(arr[bottom][j])+" ";
        count++;
    }
    }

    bottom--;
    if(count < size){
    for(var k = bottom; k >= top; k--){
        res+=arr[k][right]+" ";
        count++;
    }
}

    right--;
    left--;
    if(count < size){
    for(var l = right; l > left; l--){
        res+=arr[left][l]+" ";
        count++ 
    }
}
    top++;
    left++;
  }
    return res;
}
function runProgram(input) {
    // Write code here
    input= input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases;i++){
        var [row, col] = input[line++].trim().split(" ").map(Number);
        var arr = [];
        for(var j = 0; j < row; j++){
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        var r = spiral(arr,row,col);
        console.log(r)
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
  
  