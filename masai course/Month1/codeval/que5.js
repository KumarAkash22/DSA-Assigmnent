function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 1; i <= testCases; i++){
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        //console.log(size,arr);
    
    count = 0;
    subArr = "";
   
    for(var j = 0; j < size; j++){
        for(var k = j; k < size; k++){
            subArr+= arr[k] +" ";
           
           if((subArr[0] % 2 == 0) && (subArr[subArr.length-2] % 2 == 0)){
               count++;
               //console.log(subArr)
           }
        }
        subArr = "";
    }
}
    console.log(count);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    1 2 3 4 5
    3
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
  
  