function horizontal(arr,size){
    var i = 0; 
    var j = size - 1;
    while(i < j){
        for(var k = 0; k < size; k++){
            if(arr[i][k] != arr[j][k]){
                return false;
            } 
        }
        i++;
        j--;
    }
    return true;
}
function vertical(arr, size){
    var i = 0;
    var j = size -1;
    while(i < j){
        for(var k = 0; k < size; k++){
            if(arr[k][i] != arr[k][j]){
                return false;
            }
        }
        i++;
        j--;       
    }
    return true;
}
function runProgram(input) {
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    
    for(var i = 0; i < testCases; i++){
        var arr = [];
        var size = +input[line++];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(""));
        }
        var h = horizontal(arr, size);
        var v = vertical(arr, size);
        if(h==true && v == true){
            console.log("BOTH");
        }else if(h == false && v == false){
            console.log("NO");
        }else if(h == true && v == false){
            console.log("HORIZONTAL");
        }else{
            console.log("VERTICAL")
        }
    }   
    
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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
  
  