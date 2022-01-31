function frequency(left,right,value, arr,N){
    var count = 0;
    for(var i = left-1; i < right; i++){
        if(arr[i] == value){
            count++;
        }
    }
    console.log(count);
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var line = 2;
    var [N,query] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    for(var i = 0; i < query; i++){
        var [left, right,value] = input[line++].trim().split(" ").map(Number);
        frequency(left,right,value,arr,N);
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
    `);
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
  
  