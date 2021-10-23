function runProgram(input) {
    // Write code here
   var input = input;
   left = 0;
   right = input.length-1;
   while(left < right){
       if(input[left] != input[right]){
           console.log("No")
       }
       left++;
       right--;
   }
   console.log("Yes");
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`1221`);
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
  
  