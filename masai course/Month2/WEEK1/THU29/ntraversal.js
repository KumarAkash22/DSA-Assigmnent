function runProgram(input) {
    // Write code here
    input= input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 1; i <= testCases; i++){
        var row = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < row; j++){
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        //console.log(arr)
        res = "";
        res1= "";
        res2 = "";
        
        for(var k = 0; k < 1; k++){
            for(var l = row - 1; l > 0; l--){
            res+=arr[l][k]+" "; 
                }
            }

        for(var a = 0; a < row; a++){
            for(var b = a; b <= a; b++){
                res1+=arr[a][b]+" ";
            }
        }    

        for(var x = row-1; x < row; x++){
            for (var y = row -2; y >= 0; y--){
                res2+=arr[y][x]+" ";   
                }     
        }  
        console.log(res+res1+res2)
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