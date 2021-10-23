function runProgram(input) {
  var input = input.split("\n");
  var testCases = +input[0];
  var res = [];
  for(var i = 1; i <= testCases; i++){
    var arr = input[i].trim().split(" ").map(Number);
    var op = +arr[0];

    if(op == 2){
      for(var j = 1; j < arr.length; j++)
      
      res.push(arr[j]);
     // console.log(arr.length)
    }else{
      if(res.length == 0){
        console.log("No Food");
      }else{ 
        console.log(res[res.length - 1]);
        res.pop(arr[i])
      }
    }
  }
 // console.log(res)
}
  if (process.env.USERNAME === "admin") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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
  
  