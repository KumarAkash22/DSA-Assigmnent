function runProgram(input) {
    // Write code here
    var time = input.split().map(Number);
    var min = time%60;
    var hr = Math.floor(time/60);
    if(hr > 1){
    console.log(hr+"hrs "+min+"mins");
    }else {
        console.log(hr+"hr "+min+"mins");
    }
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`135`);
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
