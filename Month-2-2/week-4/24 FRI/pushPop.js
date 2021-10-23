function runProgram(input) {
    // Write code here
  var input = input.split("\n");
  var testCases = +input[0];
  var res = [];
  for(var i = 1; i <= testCases; i++){
    var arr = input[i].trim().split(" ").map(Number);
    var op = +arr[0];
   // console.log(arr,op)
    if(op == 1){
      for(var j = 1; j < arr.length; j++){
        res.push(arr[j]);
      }
      
    }else if (op == 2){
      res.pop(arr[i]);
    
    }else{
      if(res.length==0){
      console.log("Empty!");

      }
     else {
      console.log(res[res.length-1]) 
    } 
  }
     }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    1 53
    3
    2
    3`);
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
  
  