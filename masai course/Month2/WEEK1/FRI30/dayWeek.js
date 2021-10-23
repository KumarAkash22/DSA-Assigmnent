function runProgram(input) {
    // Write code here
    input = input.split("\n");
    var day = input[0];
    var num = +input[1].trim();
    var res = 0;
    
    if(day =="Monday"){
       res+= num + 1;
    }
    else if(day =="Tuesday"){
        res+= num + 2;
     }
     else if(day =="Wednesday"){
        res+= num + 3;
     } 
     else if(day =="Thursday"){
        res+= num + 4;
     }
     else if(day =="Friday"){
        res+= num + 5;
     }
     else if(day =="Saturday"){
        res+= num + 6;
     }
     else if(day =="Sunday"){
        res+= num + 7;
     }
     var din = res % 7;
     if(din == 1){
        console.log("Monday")
     }
     else if(din == 2){
         console.log("Tuesday")
      }
      else if(din == 3){
         console.log("Wednesday")
      } 
      else if(din == 4){
         console.log("Thursday")
      }
      else if(din == 5){
         console.log("Friday")
      }
      else if(din == 6){
         console.log("Saturday")
      } 
      else if(din == 0){
         console.log("Sunday")
      }
     
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`Saturday
    8`);
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
  
  