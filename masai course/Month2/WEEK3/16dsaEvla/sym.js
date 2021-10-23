function vertical(arr, size){
    var i = 0;
    var j = size - 1;
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
function horizontal(arr,size){
    var i = 0; 
    var j = size - 1;
    
    while(i < j){
        
    for(var k = 0; k < size; k++){
       // console.log(arr[i][k],arr[j][k] +"h",i,k);
        if(arr[i][k] != arr[j][k]){
        
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
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split("").map(Number));
        }
        //console.log(arr)
        var v = vertical(arr, size);
        var h = horizontal(arr,size);
        if(v == true && h == true){
            console.log("YES");
        }else if(v == false && h == false){
            console.log("NO");
        }else if(v == true && h ==false ){
            console.log("NO");
        }else{
            console.log("NO")
        }
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    5
    00100
    01010
    10001
    01010
    01110`);
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
  
  