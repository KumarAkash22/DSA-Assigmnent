function runProgram(input) {
    var a = +input;
    //console.log(a);
    var res = "";
    var k = 1;
   for(var i = 1; i <= a; i++){
       for(var j = 1; j <= a; j++){
           if(i == a){
              res+="*" +" ";
           }
           if(j == 1){
            res+="*" +" ";
           }
           if(j == a ){
            res+="*" +" "; 
           }
        }
        console.log(res);
        res= "";
    }
    
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5`);
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
  
  