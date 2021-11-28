function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N,C,R] = input[0].split(" ").map(Number);
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr = arr1.sort((a,b) => {
        return a-b;
    })  
    var sum = 0;  
    for(var i = 0; i < C; i++){
        sum+=arr[i];
    }
    if(sum <= R){
        console.log("Party")
    }else{
        console.log("Sad")
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5 3 24
    6 4 21 20 13`);
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
  
  