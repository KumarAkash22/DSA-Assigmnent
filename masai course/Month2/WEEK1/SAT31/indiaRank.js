function runProgram(input) {
    // Write code here
    input = input.split("\n");
     var totalCoutry = +input[0];
    var country = "";
    var count =0;
     for(var i = 1; i <= totalCoutry; i++){
     country = input[i].trim().split(" ");
     if(country=="India"){
        console.log(count+1)
        }else{
          count++;
        }
      } 
}
  
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`);
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
  
  