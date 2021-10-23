function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var str = input[2].trim();
    var sum = 0;
    for(var i = 0; i < str.length;i++){
        sum+=-97+n+str.charCodeAt(i);   
    }
   console.log(sum)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`30
    3
    abc`);
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
  
  

  // var string = "abc";

// for (var i = 0; i < string.length; i++) {
//   console.log(string.charCodeAt(i));
// }