function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = input[0];
    var line = 1;
    var count = 0;
    for(var i = 0; i < testCases; i++){
        var [row, col] = input[line++].trim().split(" ").map(Number)
        var arr =[];
        for(var j = 0; j < row; j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
       // console.log(arr);
       var a = 0;
       while(a < col){
           for(var b = 0; b < col; b++){
               if(arr[a][b] != arr[a][b+1]){
                   count++;
               }
           }
           console.log(count);
       }
      a++;
      b-- 
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
  
  