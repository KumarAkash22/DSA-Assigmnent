function runProgram(input) {
    // Write code here
    input = input.split("\n");
     var testCases = +input[0];
    countA = 0;
    countB = 0;
    for(var i = 1; i <= testCases; i++){
      var store = input[1].trim().split("\n");
      //console.log(store,store.length,"h");
      if(input[i] == store){
        
        countA++
      }else{
        var store1 = input[i];
        countB++;
      }
    }
    if(countA < countB){
      console.log(store1);
    }else{
      console.log(store);
    }
        
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    ABA
    ABA
    ABA
    A
    A`);
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
  
  