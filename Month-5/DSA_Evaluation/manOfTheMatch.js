function win(over,run){
    var vir = 0;
    var abd = 0;
    for(var i = 0; i < over*6; i++){
        abd+=run[i];
        if(run[i] == 1 || run[i] == 3){
            vir+=run[i];
        }
    }
    if(vir>abd){
        console.log("Virat Kohli");
    }else if(abd > vir){
        console.log("AB de Villiers")
    }else{
        console.log("Tie")
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testCase = +input[0];
    var line = 1;
    for(var i = 0; i < testCase; i++){
        var over = +input[line++].trim();
        var run = input[line++].trim().split(" ").map(Number);
        win(over,run);

    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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
  
  