function runProgram(input) {
    // Write code here
   input = input.split("\n");
   var testCase = +input[0];
   var line = 1
   for(var i = 0; i < testCase; i++){
    var [row, col,q] = input[line++].trim().split(" ").map(Number);
    var arr = [];
    for(var j = 0; j < row; j++){
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    //console.log(arr,q);
    var res1 = "";
    var res2 = "";
    if(q%2 == 1){

        for(var a = 0; a < row; a++){
            if(a%2==0){
                for(b = 0; b < col; b++){
                    res1+=arr[a][b]+" ";
                }
            }else{
                for(b = col-1; b >= 0; b--){
                    res1+=arr[a][b]+" ";
                }
            }
        }
    }else{
        for(var a = 0; a < row; a++){
            if(a%2==0){
                for(b = col-1; b >= 0; b--){
                    res2+= arr[a][b]+" ";
                }
            }else{
                for(b = 0; b < col; b++){
                    res2+=arr[a][b]+" ";
                    
                }
            }
        }
    }
    console.log(res1,res2);
   }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
    `);
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
  
  