function runProgram(input) {
    // Write code here
   var input = input.split("\n");
   var N = +input[0];
   var str = input[1].trim().split("");
   var x = 0;
   var y = 0;
   for(var i = 0; i < N; i++){
       if(str[i] == "u"){
           x+=1;
       }else if(str[i] == "d"){
           x = x -1;
       }else if(str[i] == "r"){
           y+=1;
       }else{
           y = y - 1;
       }
   }
   console.log(x,y)
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    lldd`);
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
  
  