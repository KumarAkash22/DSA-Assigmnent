function rotate90(arr, n){
    for(var i =0; i < Math.floor(n/2); i++){
        for(j = i; j < n -i -1; j++){
            var temp = arr[i][j];
            arr[i][j] = arr [n - j -1][i];
            arr[n - j - 1][i] = arr[n - i - 1][n - j -1];
            arr[n - i - 1][n - j -1] = arr[j][n - i - 1];
            arr [j][n -i -1] = temp;
        }
        
    }
    return arr;
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
        var res = (rotate90(arr,size));
        var a = "";
        for(var k = 0; k < size; k++){
            for(var l = 0; l < size; l++){
                a+=res[k][l]+" ";
            }
            console.log(a);
            a = "";
        }
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
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
  
  