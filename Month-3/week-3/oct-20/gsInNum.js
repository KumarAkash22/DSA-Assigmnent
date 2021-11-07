
function runProgram(input) {
    // Write code here
    debugger
    var input = input.split(" ").map(Number);
    var current = 0;
    generateSubsequence(input,[],current);
  }
  function generateSubsequence(arr,str,i){
      if(i == arr.length){
          console.log(str.join(" "))
          return;
      }
      generateSubsequence(arr,str,i+1);
      str.push(arr[i]);
      generateSubsequence(arr,str,i+1);
      str.pop();
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1 2 3`);
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
  
  