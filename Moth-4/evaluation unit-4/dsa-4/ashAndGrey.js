function game(n,ash,grey){
    var count = 0;
    for(var i = 0; i < n; i++){
        if(ash[i] > grey[i]){
            count++;
    }
}
if(count == n){
    return "Ash Finally Wins"
}else{
    return "Train Hard Again"
}
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for(var i = 0; i < testCases; i++){
        var n = +input[line++].trim();
        var ash = input[line++].trim().split(" ").map(Number);
        var grey = input[line++].trim().split(" ").map(Number);
        console.log(game(n,ash,grey));
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    3
    12 3 4
    5 4 1
    2
    1 5
    1 4`);
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
  
  