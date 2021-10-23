function runProgram(input) {
   input = input.split("\n");
   var [row, col] = input[0].trim().split(" ").map(Number);
   arr = [];
   for(var i = 1; i < row; i++){
       arr.push(input[i].trim().split(" ").map(Number));
   }
   var res = ""
    
        
    for(var j = 0; j <= row; j++){
        if(i % 2 == 0){
            for(var k = col-1; k >= 0; k--){
                res+=arr[j][k]+" ";
            }
            
            }else {
            for(var k = 0; k < col; k++){
                res+=arr[j][k]+" ";
            } 
          
        }
            
        }
      
   console.log(res);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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
  
  