function runProgram(input) {
    // Write code here
    var str = input.split("");
    count = 0;
    for(var i = 0; i < str.length; i++){
        for(j = i+1; j < str.length; j++){
            if(str[i]==str[j]){
                count++;
                //console.log(count);
            }
        }
    }
    if(count > 0){
        console.log("No")
    }else{
        console.log("Unique")
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`lkjhgfd`);
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
  
  