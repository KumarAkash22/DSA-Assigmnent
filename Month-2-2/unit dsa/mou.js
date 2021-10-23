function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for(var i = 0; i < testcase; i++){
        var N = +input[line++].trim()
        var str = input[line++].trim();
        var countm = 0;
        var counto = 0;
        var countu = 0;
        var counts = 0;
        var counte = 0;
        var res = []
        //console.log(str,N)
        for(var i = 0; i < N; i++){
            if(str[i] == "m"){
                countm++
            }else if(str[i] == "o"){
                counto++;
            }else if(str[i] == "u"){
                countu++;
            }else if(str[i] == "s"){
                counts++;
            }else if(str[i] == "e"){
                counte++;
            }
        }
    }
    res.push(countm,counto,countu,counts,counte);
    console.log(res);
}
  if (process.env.USERNAME === "admin") {
    runProgram(`2
    7
    mousems
    8
    wimousee`);
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
  
  