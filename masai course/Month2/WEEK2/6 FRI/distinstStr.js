function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var testCases = +input[0];
  var line = 1;
  var distStr = [];
  for(var i = 0; i < testCases; i++){
      var size = +input[line++];
      var str = input[line++].trim().split("");
      
      //console.log(str,size);
      for(var a = 0; a < size; a++){
        res = "";
      for(j = a; j < size; j++){
          res+=str[j];
        // console.log(res);
         
        if(distStr == 0){
          distStr.push(res);
        }else{
          var count = 0;
          for(var k = 0; k < distStr.length; k++){
          if(res == distStr[k]){
          count++;
          }
        }
         if(count == 0){
         distStr.push(res);
      }
     }
     }
    }
  console.log(distStr.length)
  var distStr = [];
  }
}
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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
  
  