function grid(arr , size){
  count = 0;
  var i = 0;
  var j = 0;
  while(i >= 0 && j >= 0 && i < size && j < size){
    if(arr[i][j] == "k"){
      return 0;
    }
    if(arr[i][j] == "L"){
      arr[i][j] = "k";
      j--;
    } else if(arr[i][j] == "R"){
      arr[i][j] = "k";
      j++;
    }else if(arr[i][j] == "U"){
      arr[i][j] = "k";
      i--;
    }else {
      arr[i][j] ="k"
      i++;
    }
    count++;
  }
  return count;
}

function runProgram(input) {
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var size = +input[line++].trim();
        var arr = [];
        for(var j = 0; j < size; j++){
            arr.push(input[line++].trim().split(""));
        }
        console.log(grid(arr,size))
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
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
  
  