function runProgram(input) {
    input = input.split("\n");
    var size1 = + input[0];
    var size2 = + input[2].trim();
    var alice = input[1].trim();
    var adam = input[3].trim();
    var count = 0
    for(var i = 0; i < size2; i++){        
        for(var j = 0; j < size1; j++){
            if(adam[i]==alice[j]){
                count++;
                break;
            }
        }//console.log(count)
        
    }
    if(count == size2){
        console.log("Yes");
    }else {
        console.log("No")
    }
    //console.log(adam,alice);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    aabbc
    4
    abcd`);
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
  
  