function even(arr,row,col){
    
    
        for(var i = 0; i < row;i=i+2){
            var res = [];
            for(var j = 0; j < col; j++){
                res.push(arr[i][j]);
                
            }
            console.log(res.join(" "));
        }
        
    
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [row,col] = input[0].split(" ").map(Number);
    var arr = [];
    var line = 1;
    for(var i = 0; i < row; i++){
        var mat = input[line++].trim().split(" ").map(Number);
        arr.push(mat);
        
        }
        even(arr,row,col);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 3
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
  
  