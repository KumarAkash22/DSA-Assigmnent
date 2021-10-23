function diamond(arr,size){
    var res = "";
    var m = size-1;
    for(var i = Math.floor(size/2); i >= 0; i--){
        res+=arr[i][m--]+" ";
    }
   
    for(var i = 1; i <= Math.floor(size/2); i++){
        res+=arr[i][m--]+" ";
    }
    
    m = 1;
    for(var k = Math.floor(size/2)+1; k <= size-1; k++){
        res+=arr[k][m++]+" ";
    }
    for(var l = size-2; l > Math.floor(size/2); l--){
        res+=arr[l][m++]+" ";
     }
    return res;
}
    function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testcases = +input[0];
    var line = 1;
    for(var i = 0; i < testcases; i++){
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        console.log(diamond(arr,size));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1
    5
    10 4 3 7 4
    3 3 6 5 7
    4 2 3 9 10
    5 7 6 5 8
    5 8 8 1 8`);
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
  
  