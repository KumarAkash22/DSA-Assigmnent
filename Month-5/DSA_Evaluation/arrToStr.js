function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
   var str = "";
   for(var i = 0; i < N; i++){
       if(arr[i] < 0){
           str+= "0";
       }else{
           str+=arr[i];
       }
   }
   console.log(str);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    2 -4 6 8 -9`);
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
  
  