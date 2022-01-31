function airline(bag1,bag2,testCase){
    for(var i = 0; i < testCase; i++){
        if(bag1[i] <= 15 && bag2[i] <= 7){
            console.log ("Boarding");
        }else{
         console.log("Stop")
        }
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var bag1 = input[1].trim().split(" ").map(Number);
    var bag2 = input[2].trim().split(" ").map(Number);
    airline(bag1,bag2,testCase);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
  
  