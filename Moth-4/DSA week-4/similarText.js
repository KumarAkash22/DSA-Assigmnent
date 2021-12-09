function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var virat = input[0].split("").sort();
    var rohit = input[1].trim().split("").sort();
    var count = 0;
    for(var i = 0; i < virat.length; i++){
        for(var j = 0; j < rohit.length; j++){
            if(virat[i] == rohit[j]){
                count++;
                i++;
                j++;
            } 
        }
    }
        console.log(count);
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`eziowiomkvrrdzx
    orugiebaolddavd`);
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
  
  