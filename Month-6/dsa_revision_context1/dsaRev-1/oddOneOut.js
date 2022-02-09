function one(num1,num2,num3){
    if((num1 == num2) ){
        return num3;
    }else if((num2 == num3)){
        return num1;
    }else if((num1 == num3)){
        return num2;
    }
    else{
        return 0
    }
}
function runProgram(input) {
    // Write code here
   var [num1,num2,num3] = input.split(" ").map(Number);
   console.log(one(num1,num2,num3));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2 5 2`);
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
  
  