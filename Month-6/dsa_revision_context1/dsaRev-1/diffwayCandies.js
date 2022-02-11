function diff(N, gas, cost){
    var res = 0;
     var curr = 0;
     var  total = 0;
    for(var i = 0; i < N; i++){
        curr+= gas[i] - cost[i];
        total+= gas[i] - cost[i];
        if(curr < 0){
            res = i + 1;
            curr = 0;
        }
    }
    if(total >= 0){
        return res;
    }else{
        return -1;
    }
}
function runProgram(input) {
    // Write code here
    var input = input.split("\n");
    var N = +input[0];
    var gas = input[1].trim().split(" ").map(Number);
    var cost = input[2].trim().split(" ").map(Number);
    console.log(diff(N, gas, cost));
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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
  
  