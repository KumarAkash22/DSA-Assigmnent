function runProgram(input) {
    input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        isOdd(arr);
    }
    
}
function isOdd(arr){
    count = 0;
   // console.log(arr)
       for(var i = 0; i < arr.length-1; i++){
           if((arr[i] %2 != 0) && (arr[i+1] % 2 != 0)){
            count++;    
           }else if((arr[i] % 2 == 0) && (arr[i+1]% 2 == 0)){
            count++;
           }
           //console.log(count);
       }
       if(count > 0){
           console.log("Misbehave!");
       }else{
           console.log("Behave!")
       }

    }  
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    2
    1 2
    5
    1 2 3 4 4`);
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
  
  