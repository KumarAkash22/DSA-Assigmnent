function tile(first,second){
    var sum = 0;
    var res = 0;
    while(first < second){
       sum+= first%10;
       first = Math.floor(first/10)
       first = sum + first; 
       console.log(first); 
    }
    if(sum == second){
        console.log(sum);
    }else{
        console.log("-1");
    }
}
function runProgram(input) {
    // Write code here
    var [first,second] = input.split(" ").map(Number);
    tile(first,second);
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`32 47`);
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
  
  