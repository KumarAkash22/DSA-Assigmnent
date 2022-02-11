function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var [N, K] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var team1 = 0;
    var team2 = 0;
    for(var i = 0; i < N; i++){
        team1+=arr[i];
    }
    for(var j = N; j < N*2; j++){
        team2+=arr[j];
    }
    var res = Math.abs(team1 - team2);

    if(res <= K){
        console.log("Valid")
    }else{
        console.log("Invalid")
    }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`3 0
    1 2 3 4 2 1`);
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
  
  